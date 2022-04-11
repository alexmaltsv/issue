import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { City } from '../../lookups/entities/city.entity';
import { Speciality } from '../../lookups/entities/speciality.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('companies', { orderBy: { createdAt: 'DESC' } })
export class Company {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('int')
  cityId: number;

  @ApiProperty({ type: City })
  @ManyToOne(() => City, (city) => city.id)
  @JoinColumn({
    name: 'cityId',
  })
  city: City;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  logoUrl: string;

  @ApiProperty()
  @Column()
  backgroundUrl: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: string;

  @ApiProperty()
  @Column('int', { array: true })
  specialityIds: number[];

  @ApiProperty({ type: [Speciality] })
  @Column('json', { array: true, select: false })
  specialities?: Speciality[];
}
