import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Speciality } from '../src/modules/lookups/entities/speciality.entity';
import { Company } from '../src/modules/companies/entities/company.entity';
import { City } from '../src/modules/lookups/entities/city.entity';

const randomInt = (max: number) => Math.floor(Math.random() * max);

export default class CreateCompaniesSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const cities = await connection.getRepository(City).find({});
    const specialities = await connection.getRepository(Speciality).find({});

    const citiesCount = cities.length;
    const specialitiesCount = specialities.length;

    const data = await factory(Company)()
      .map(async (entity) => {
        entity.cityId = cities[randomInt(citiesCount)].id;
        entity.specialityIds = [
          specialities[randomInt(specialitiesCount)].id,
          specialities[randomInt(specialitiesCount)].id,
          specialities[randomInt(specialitiesCount)].id,
        ];
        return entity;
      })
      .makeMany(500);

    await connection
      .createQueryBuilder()
      .insert()
      .into(Company, [
        'id',
        'cityId',
        'title',
        'logoUrl',
        'backgroundUrl',
        'createdAt',
        'specialityIds',
      ])
      .values(data)
      .execute();
  }
}
