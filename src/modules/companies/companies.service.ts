import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CompaniesList, CompaniesListQuery } from './companies.interfaces';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companiesRepository: Repository<Company>,
  ) {}

  async list({
    cityIds,
    specialityIds,
    q,
    limit,
    offset,
  }: CompaniesListQuery): Promise<CompaniesList> {
    const query = this.companiesRepository
      .createQueryBuilder()
      .addSelect(
        `COALESCE(json_agg( DISTINCT jsonb_build_object('id', speciality.id, 'title', speciality.title) ), '[]')`,
        'Company_specialities',
      )
      .leftJoinAndSelect(`${Company.name}.city`, 'city')
      .leftJoin(
        'specialities',
        'speciality',
        `speciality.id = ANY(${Company.name}.specialityIds)`,
      )
      .addGroupBy(`${Company.name}.id`)
      .addGroupBy(`city.id`)
      .orderBy('createdAt')
      .limit(limit)
      .offset(offset);

    if (specialityIds && specialityIds.length) {
      query.andWhere(`${Company.name}.specialityIds @> :ids::integer[]`, {
        ids: specialityIds.map(Number),
      });
    }

    if (cityIds && cityIds.length) {
      query.andWhere(`${Company.name}.cityId = ANY(:cityIds::integer[])`, {
        cityIds,
      });
    }

    const search = q && q.trim().toLowerCase();
    if (search) {
      query.andWhere(`LOWER(${Company.name}.title) LIKE :q`, {
        q: `%${search}%`,
      });
    }

    const [items, total] = await query.getManyAndCount();

    return {
      items,
      limit,
      offset,
      total,
    };
  }
}
