import { define } from 'typeorm-seeding';
import { Speciality } from '../src/modules/lookups/entities/speciality.entity';

define(Speciality, (faker) => {
  const entity = new Speciality();
  entity.title = faker.company.catchPhraseNoun();
  return entity;
});
