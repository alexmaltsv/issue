import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { City } from '../src/modules/lookups/entities/city.entity';

export default class CreateCitiesSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(City)().createMany(20);
  }
}
