import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';

@Entity({ name: 'vehicle' })
export class Vehicle {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
vehicle_number: string;

@Column({ type: 'uuid' })
userId: Uuid;

}
