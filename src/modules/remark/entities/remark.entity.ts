import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'remark' })
export class Remark {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
remark: string;

@Column({ type: 'uuid' })
userId: Uuid;

}
