import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { response } from 'express';

@Injectable()
export class VehicleService {
  constructor(@InjectRepository(Vehicle) private vehicleRepo: Repository<Vehicle>){

  }
  async create(createVehicleDto: CreateVehicleDto,user:UserEntity) {
    const userobj={userId:user.id};
    const createObj={...createVehicleDto,...userobj};
    console.log(createObj);
    const vehicle = this.vehicleRepo.create(createObj);
    const d = await this.vehicleRepo.save(vehicle);
    return {};
  }

  findAll() {
    return this.vehicleRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto, user:UserEntity) {
    const userobj={userId:user.id};
    const updateObj={...updateVehicleDto,...userobj};
    console.log(updateObj);
    const vehicle = await this.vehicleRepo.update(id, updateObj);
    // const d = await this.vehicleRepo.save(vehicle);
    return {};
  }

  async remove(id: number) {
    try{
        const removeData=await this.vehicleRepo.delete(id);
        return {};
    }
    catch(error)
    {
        return {errorMsg:'The Field in use. Please delete the related records first'};
    }
  }

  async findByNameInsert(name:string, user:UserEntity)
  {
    let resp=await this.vehicleRepo.findOne({vehicle_number:name});
    if(!resp)
    {
        console.log("in resp");
        let createObj={vehicle_number:name,userId:user.id};
        let vehicle = this.vehicleRepo.create(createObj);
        resp = await this.vehicleRepo.save(vehicle);
    }
    
    console.log("in resp id",resp.id);

    return resp.id;
  }
}
