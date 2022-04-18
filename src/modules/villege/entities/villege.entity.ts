import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'villege' })
export class Villege {
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
createdAt: Date;

@Column()
updatedAt: Date;

@Column()
villege_name: string;

@Column({ type: 'uuid' })
userId: Uuid;

}
