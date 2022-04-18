import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';
import { Remark } from './entities/remark.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class RemarkService {
    constructor(@InjectRepository(Remark) private remarkRepo: Repository<Remark>){

    }
  async create(createRemarkDto: CreateRemarkDto,user:UserEntity) {
    const userobj={userId:user.id};
    const createObj={...createRemarkDto,...userobj};
    console.log(createObj);
    const remark = this.remarkRepo.create(createObj);
    const d = await this.remarkRepo.save(remark);
    return {};
  }

  findAll() {
    return this.remarkRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} remark`;
  }

  async update(id: number, updateRemarkDto: UpdateRemarkDto, user:UserEntity) {
    const userobj={userId:user.id};
    const updateObj={...updateRemarkDto,...userobj};
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
    let resp=await this.remarkRepo.findOne({remark:name});
    if(!resp)
    {
        console.log("in resp");
        let createObj={remark:name,userId:user.id};
        let vehicle = this.remarkRepo.create(createObj);
        resp = await this.remarkRepo.save(vehicle);
    }
    
    console.log("in resp id",resp.id);

    return resp.id;
  }
}
