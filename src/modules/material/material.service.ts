import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Material } from './entities/material.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class MaterialService {
    constructor(@InjectRepository(Material) private materialRepo: Repository<Material>){

    }
  async create(createMaterialDto: CreateMaterialDto,user:UserEntity) {
    const userobj={userId:user.id};
    const createObj={...createMaterialDto,...userobj};
    console.log(createObj);
    const material = this.materialRepo.create(createObj);
    const d = await this.materialRepo.save(material);
    return {};
  }

  findAll() {
    return this.materialRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} material`;
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto,user:UserEntity) {
    const userobj={userId:user.id};
    const updateObj={...updateMaterialDto,...userobj};
    console.log(updateObj);
    const material = await this.materialRepo.update(id, updateObj);
    // const d = await this.materialRepo.save(material);
    return {};
  }

  async remove(id: number) {
      try{
        const removeData=await this.materialRepo.delete(id);
        return {};
      }
      catch(error)
      {
        return {errorMsg:'The Field in use. Please delete the related records first'};
      }
    
  }
  
  async findByNameInsert(name:string, user:UserEntity)
  {
    let resp=await this.materialRepo.findOne({material_name:name});
    if(!resp)
    {
        console.log("in resp");
        let createObj={material_name:name,userId:user.id};
        let vehicle = this.materialRepo.create(createObj);
        resp = await this.materialRepo.save(vehicle);
    }
    
    console.log("in resp id",resp.id);

    return resp.id;
  }
}
