import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'supplier' })
export class Supplier {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
supplier_name: string;

@Column({ type: 'uuid' })
userId: Uuid;

}
