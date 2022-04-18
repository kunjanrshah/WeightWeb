import { Injectable } from '@nestjs/common';
import { CreateVillegeDto } from './dto/create-villege.dto';
import { UpdateVillegeDto } from './dto/update-villege.dto';
import { UserEntity } from '../user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Villege } from './entities/villege.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VillegeService {
  constructor(@InjectRepository(Villege) private villegeRepo: Repository<Villege>){    
  }

  async create(createVillegeDto: CreateVillegeDto,user:UserEntity) {
    const userobj={userId:user.id};
    const createObj={...createVillegeDto,...userobj};
    console.log(createObj);
    const villege = this.villegeRepo.create(createObj);
    const d = await this.villegeRepo.save(villege);
    return {};
  }

  findAll() {
    return this.villegeRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} villege`;
  }

  async update(id: number, updateVillegeDto: UpdateVillegeDto, user:UserEntity) {
    const userobj={userId:user.id};
    const updateObj={...updateVillegeDto,...userobj};
    console.log(updateObj);
    const villege = await this.villegeRepo.update(id, updateObj);
    // const d = await this.villegeRepo.save(villege);
    return {};
  }

  async remove(id: number) {
    try{
        const removeData=await this.villegeRepo.delete(id);
        return {};
    }
    catch(error)
    {
        return {errorMsg:'The Field in use. Please delete the related records first'};
    }
  }

  async findByNameInsert(name:string, user:UserEntity)
  {
    let resp=await this.villegeRepo.findOne({villege_name:name});
    if(!resp)
    {
        console.log("in resp");
        let createObj={villege_name:name,userId:user.id};
        let vehicle = this.villegeRepo.create(createObj);
        resp = await this.villegeRepo.save(vehicle);
    }
    
    console.log("in resp id",resp.id);

    return resp.id;
  }
}
