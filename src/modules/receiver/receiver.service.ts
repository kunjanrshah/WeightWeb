import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReceiverDto } from './dto/create-receiver.dto';
import { UpdateReceiverDto } from './dto/update-receiver.dto';
import { Receiver } from './entities/receiver.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class ReceiverService {
    constructor(@InjectRepository(Receiver) private remarkRepo: Repository<Receiver>){

    }
  async create(createReceiverDto: CreateReceiverDto,user:UserEntity) {
    const userobj={userId:user.id};
    const createObj={...createReceiverDto,...userobj};
    console.log(createObj);
    const remark = this.remarkRepo.create(createObj);
    const d = await this.remarkRepo.save(remark);
    return {};
  }

  findAll() {
    return this.remarkRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} receiver`;
  }

  async update(id: number, updateReceiverDto: UpdateReceiverDto,user:UserEntity) {
    const userobj={userId:user.id};
    const updateObj={...updateReceiverDto,...userobj};
    console.log(updateObj);
    const remark = await this.remarkRepo.update(id, updateObj);
    // const d = await this.remarkRepo.save(remark);
    return {};
  }

  async remove(id: number) {
    try{
        const removeData=await this.remarkRepo.delete(id);
        return {};
    }
    catch(error)
    {
        return {errorMsg:'The Field in use. Please delete the related records first'};
    }
  }

  async findByNameInsert(name:string, user:UserEntity)
  {
    let resp=await this.remarkRepo.findOne({receiver_name:name});
    if(!resp)
    {
        console.log("in resp");
        let createObj={receiver_name:name,userId:user.id};
        let vehicle = this.remarkRepo.create(createObj);
        resp = await this.remarkRepo.save(vehicle);
    }
    
    console.log("in resp id",resp.id);

    return resp.id;
  }
}
