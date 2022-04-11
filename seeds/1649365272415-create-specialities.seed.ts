import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Speciality } from '../src/modules/lookups/entities/speciality.entity';

export default class CreateSpecialitiesSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Speciality)().createMany(20);
  }
}
