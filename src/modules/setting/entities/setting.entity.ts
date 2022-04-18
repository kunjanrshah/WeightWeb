import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'setting' })
export class Setting {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
name: string;

@Column()
value: string;

}
