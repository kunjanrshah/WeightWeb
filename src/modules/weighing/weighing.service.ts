import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, getConnection, Raw, Repository } from 'typeorm';
import { CreateWeighingDto } from './dto/create-weighing.dto';
import { UpdateWeighingDto } from './dto/update-weighing.dto';
import { Weighing } from './entities/weighing.entity';
import { UserEntity } from '../user/user.entity';
import { VehicleService } from '../vehicle/vehicle.service';
import { MaterialService } from '../material/material.service';
import { SupplierService } from '../supplier/supplier.service';
import { VillegeService } from '../villege/villege.service';
import { ReceiverService } from '../receiver/receiver.service';
import { RemarkService } from '../remark/remark.service';
import { SettingService } from '../setting/setting.service';
import { Vehicle } from '../vehicle/entities/vehicle.entity';

@Injectable()
export class WeighingService {
  constructor(
      @InjectRepository(Weighing) private weighingRepo: Repository<Weighing>,
      private vehicleService: VehicleService,
      private materialService: MaterialService,
      private supplierService: SupplierService,
      private villegeService: VillegeService,
      private receiverService: ReceiverService,
      private remarkService: RemarkService,
      private settingService: SettingService,

      ){    
  }
  async create(createWeighingDto: CreateWeighingDto,user:UserEntity) {
    const userobj={userId:user.id};
    let createObj={...createWeighingDto,...userobj};
    console.log("weighing create object",createObj);

    if(createObj.vehicle_number)
    {
        createObj['vehicle_id']= await this.vehicleService.findByNameInsert(createObj.vehicle_number,user);
    }

    if(createObj.material_name)
    {
        createObj['material_id']= await this.materialService.findByNameInsert(createObj.material_name,user);
    }

    if(createObj.supplier_name)
    {
        createObj['supplier_id']= await this.supplierService.findByNameInsert(createObj.supplier_name,user);
    }

    if(createObj.villege_name)
    {
        createObj['villege_id']= await this.villegeService.findByNameInsert(createObj.villege_name,user);
    }

    if(createObj.receiver_name)
    {
        createObj['receiver_id']= await this.receiverService.findByNameInsert(createObj.receiver_name,user);
    }

    if(createObj.remark_text)
    {
        createObj['remark_id']= await this.remarkService.findByNameInsert(createObj.remark_text,user);
    }

    let settingData=await this.settingService.findAll();
    let flag2Data=settingData.filter((item)=>item.name=='flag2').pop()?.value;
    
    if(flag2Data=='TARE-GROSS')
    {
        if(createObj?.gross_weight>0 && createObj?.tare_weight>0){
            createObj['status']="completed";
        }
        else{
            createObj['status']="pending";
        }
    }
    else
    {
        createObj['status']="completed";
    }

    // if(createObj?.gross_weight>0 && createObj?.tare_weight>0){
    //     createObj['status']="completed";
    // }
    // else{
    //     createObj['status']="pending";
    // }


    const weighing = this.weighingRepo.create(createObj);
    const d = await this.weighingRepo.save(weighing);
    // console.log("this is console for save",d);
    let queryObject={
        relations: ["vehicle","supplier","receiver","villege","remark","material"]
    };
    let response=await this.weighingRepo.findOne(d.id,queryObject);
    console.log('create weight',response);
    return response;
  }

  async findAll(queryParams:any) {
    console.log("params:",queryParams);
    // let queryWeighing=await this.weighingRepo.createQueryBuilder('');
     let queryWeighing=await getConnection().createQueryBuilder().select('weighing').from(Weighing,'weighing');
        queryWeighing.leftJoinAndSelect("weighing.vehicle", "vehicle")
        queryWeighing.leftJoinAndSelect("weighing.supplier", "supplier")
        queryWeighing.leftJoinAndSelect("weighing.receiver", "receiver")
        queryWeighing.leftJoinAndSelect("weighing.villege", "villege")
        queryWeighing.leftJoinAndSelect("weighing.remark", "remark")
        queryWeighing.leftJoinAndSelect("weighing.material", "material")
    let conditionalObject={};
    if(queryParams?.remarkId)
    {
        queryWeighing.andWhere('remark_id=:remark_id',{'remark_id':queryParams?.remarkId});
        conditionalObject['remark_id']=queryParams?.remarkId;
    }
      
    if(queryParams?.villegeId)
    {
        queryWeighing.andWhere('villege_id=:villege_id',{'villege_id':queryParams?.villegeId});
        conditionalObject['villege_id']=queryParams.villegeId;
    }
    
    if(queryParams?.materialId)
    {
        queryWeighing.andWhere('material_id=:material_id',{'material_id':queryParams?.materialId});
        conditionalObject['material_id']=queryParams.materialId;
    }
    if(queryParams?.supplierId)
    {
        queryWeighing.andWhere('supplier_id=:supplier_id',{'supplier_id':queryParams?.supplierId});
        conditionalObject['supplier_id']=queryParams.supplierId;
    }
    if(queryParams?.vehicleId)
    {
        queryWeighing.andWhere('vehicle_id=:vehicle_id',{'vehicle_id':queryParams?.vehicleId});
        conditionalObject['vehicle_id']=queryParams.vehicleId;
    }
    if(queryParams?.receiverId)
    {
        queryWeighing.andWhere('receiver_id=:receiver_id',{'receiver_id':queryParams?.receiverId});
        conditionalObject['receiver_id']=queryParams.receiverId;
    }
    if(queryParams?.userId)
    {
        queryWeighing.andWhere('weighing.user_id=:userId',{'userId':queryParams?.userId});
        conditionalObject['userId']=queryParams.userId;
    }

    if(queryParams?.sno)
    {
        queryWeighing.andWhere('weighing.id=:sno',{'sno':queryParams?.sno});
        conditionalObject['sno']=queryParams.sno;
    }

    if(queryParams?.charges)
    {
        queryWeighing.andWhere('weighing.charges=:charges',{'charges':queryParams?.charges});
        conditionalObject['charges']=queryParams.charges;
    }


    if(queryParams?.status)
    {
        queryWeighing.andWhere('status=:status',{'status':queryParams?.status});
        conditionalObject['status']=queryParams?.status;
    }
    else
    {
        queryWeighing.andWhere('status=:status',{'status':'completed'});
        conditionalObject['status']='completed';
    }


    if(queryParams?.startDate && queryParams?.endDate)
    {
        queryWeighing.andWhere('date(weighing.created_at) between :from_date and :to_date',{'from_date':queryParams?.startDate,'to_date':queryParams?.endDate});
        conditionalObject['date(createdAt)']=Between('2022-03-22', '2022-03-21')
    }

    console.log("params1:",conditionalObject);

    if(queryParams?.status=='pending')
    {
        queryWeighing.orderBy('weighing.id', 'DESC')
    }

    // let queryObject={
    //     relations: ["vehicle","supplier","receiver","villege","remark","material"],
    //     where: {Raw(`date(created_at)>'2022-03-01'`)}
    // }

    return queryWeighing.getMany();
  }

  findOne(id: number) {
    let queryObject={
        relations: ["vehicle","supplier","receiver","villege","remark","material"]
    };
    return this.weighingRepo.findOne(id,queryObject);
  }

  async update(id: number, updateWeighingDto: UpdateWeighingDto,user:UserEntity) {
    const userobj={userId:user.id};
    const updateObj={...updateWeighingDto,...userobj};
    console.log(updateObj);
    if(updateObj.vehicle_number)
    {
        updateObj['vehicle_id']= await this.vehicleService.findByNameInsert(updateObj.vehicle_number,user);
    }

    if(updateObj.material_name)
    {
        updateObj['material_id']= await this.materialService.findByNameInsert(updateObj.material_name,user);
    }

    if(updateObj.supplier_name)
    {
        updateObj['supplier_id']= await this.supplierService.findByNameInsert(updateObj.supplier_name,user);
    }

    if(updateObj.villege_name)
    {
        updateObj['villege_id']= await this.villegeService.findByNameInsert(updateObj.villege_name,user);
    }

    if(updateObj.receiver_name)
    {
        updateObj['receiver_id']= await this.receiverService.findByNameInsert(updateObj.receiver_name,user);
    }

    if(updateObj.remark_text)
    {
        updateObj['remark_id']= await this.remarkService.findByNameInsert(updateObj.remark_text,user);
    }

    if(updateObj?.gross_weight && updateObj?.tare_weight){
        if(updateObj?.gross_weight>0 && updateObj?.tare_weight>0)
        {
            updateObj['status']="completed";
        }
        else{
            updateObj['status']="pending";
        }
    }
   
    delete updateObj.vehicle_number;
    delete updateObj.material_name;
    delete updateObj.supplier_name;
    delete updateObj.villege_name;
    delete updateObj.receiver_name;
    delete updateObj.remark_text;
    const weighing = await this.weighingRepo.update(id, updateObj);
    // const d = await this.weighingRepo.save(villege);
    let queryObject={
        relations: ["vehicle","supplier","receiver","villege","remark","material"]
    };
    return this.weighingRepo.findOne(id,queryObject);
  }

  async remove(id: number) {
    const removeData=await this.weighingRepo.delete(id);
    return {};
  }

  async deleteAllById(ids:any[])
  {
    const removeData=await this.weighingRepo.delete(ids);
    return {};
  }
  async getNextId()
  {
    const query = this.weighingRepo.createQueryBuilder("weighing");
    query.select("MAX(weighing.id)", "id");
    const result = await query.getRawOne();
    return result;
  }
}
