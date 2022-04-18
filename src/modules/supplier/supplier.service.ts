import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Supplier } from './entities/supplier.entity';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class SupplierService {
    constructor(@InjectRepository(Supplier) private supplierRepo: Repository<Supplier>){

    }
  async create(createSupplierDto: CreateSupplierDto,user:UserEntity) {
    const userobj={userId:user.id};
    const createObj={...createSupplierDto,...userobj};
    console.log(createObj);
    const supplier = this.supplierRepo.create(createObj);
    const d = await this.supplierRepo.save(supplier);
    return {};
  }

  findAll() {
    return this.supplierRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto,user:UserEntity) {
    const userobj={userId:user.id};
    const updateObj={...updateSupplierDto,...userobj};
    console.log(updateObj);
    const supplier = await this.supplierRepo.update(id, updateObj);
    // const d = await this.supplierRepo.save(supplier);
    return {};
  }

  async remove(id: number) {
    try{
        const removeData=await this.supplierRepo.delete(id);
        return {};
    }
    catch(error)
    {
        return {errorMsg:'The Field in use. Please delete the related records first'};
    }
  }

  async findByNameInsert(name:string, user:UserEntity)
  {
    let resp=await this.supplierRepo.findOne({supplier_name:name});
    if(!resp)
    {
        console.log("in resp");
        let createObj={supplier_name:name,userId:user.id};
        let vehicle = this.supplierRepo.create(createObj);
        resp = await this.supplierRepo.save(vehicle);
    }
    
    console.log("in resp id",resp.id);

    return resp.id;
  }
}
