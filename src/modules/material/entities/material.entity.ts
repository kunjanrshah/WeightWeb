import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'material' })
export class Material {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
material_name: string;

@Column({ type: 'uuid' })
userId: Uuid;

}