import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Supplier } from '../../supplier/entities/supplier.entity';
import { Villege } from '../../villege/entities/villege.entity';
import { Remark } from '../../remark/entities/remark.entity';
import { Receiver } from '../../receiver/entities/receiver.entity';
import { Material } from '../../material/entities/material.entity';

@Entity({ name: 'weighing' })
export class Weighing {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
charges:number;

@Column()
payment_type:string;

@Column()
gross_weight:number;

@Column()
tare_weight:number;

@Column()
net_weight:number;

@Column()
vehicle_id:number;

@Column()
supplier_id:number;

@Column()
material_id:number;

@Column()
villege_id:number;

@Column()
receiver_id:number;

@Column()
remark_id:number;

@Column()
status:string;

@Column({ type: 'uuid' })
userId: Uuid;

@OneToOne(() => Vehicle)
@JoinColumn()
vehicle: Vehicle;

@OneToOne(() => Supplier)
@JoinColumn()
supplier: Supplier;

@OneToOne(() => Villege)
@JoinColumn()
villege: Villege;

@OneToOne(() => Remark)
@JoinColumn()
remark: Remark;

@OneToOne(() => Receiver)
@JoinColumn()
receiver: Receiver;

@OneToOne(() => Material)
@JoinColumn()
material: Material;
}
