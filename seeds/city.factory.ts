import { define } from 'typeorm-seeding';
import { City } from '../src/modules/lookups/entities/city.entity';
import faker from '@faker-js/faker';

define(City, () => {
  const entity = new City();
  entity.title = faker.unique(faker.address.city);
  entity.country = faker.unique(faker.address.country);
  return entity;
});
