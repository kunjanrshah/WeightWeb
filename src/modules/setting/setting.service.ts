import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingService {
    constructor(@InjectRepository(Setting) private settingRepo: Repository<Setting>){

    }
    async create(createSettingDto: CreateSettingDto) {
        const supplier = this.settingRepo.create(createSettingDto);
        const d = await this.settingRepo.save(supplier);
        return {};
        }

        async findAll() {
        return await this.settingRepo.find();
        }


    findOne(id: number) {
        return `This action returns a #${id} setting`;
    }

    async update(id: number, updateSettingDto: UpdateSettingDto) {
        const supplier = await this.settingRepo.update(id, updateSettingDto);
        // const d = await this.supplierRepo.save(supplier);
        return {};
    }

    remove(id: number) {
        return `This action removes a #${id} setting`;
    }
}
