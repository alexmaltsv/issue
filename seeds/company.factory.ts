import { define } from 'typeorm-seeding';
import { Company } from '../src/modules/companies/entities/company.entity';
import faker from '@faker-js/faker';

define(Company, () => {
  const entity = new Company();
  entity.cityId = 0;
  entity.specialityIds = [];
  entity.backgroundUrl = `https://loremflickr.com/320/240?random=${Math.random()}`;
  entity.logoUrl = `https://loremflickr.com/30/30?random=${Math.random()}`;
  entity.title = faker.company.companyName();
  entity.createdAt = new Date().toISOString();
  entity.specialities = null;
  return entity;
});
