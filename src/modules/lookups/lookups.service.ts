import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City, Speciality } from './entities';

@Injectable()
export class LookupsService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,

    @InjectRepository(Speciality)
    private specialityRepository: Repository<Speciality>,
  ) {}

  async getCities(): Promise<City[]> {
    return this.cityRepository.find({});
  }

  async getSpecialities(): Promise<Speciality[]> {
    return this.specialityRepository.find({});
  }
}
