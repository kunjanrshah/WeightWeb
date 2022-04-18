import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'receiver' })
export class Receiver {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
receiver_name: string;

@Column({ type: 'uuid' })
userId: Uuid;

}