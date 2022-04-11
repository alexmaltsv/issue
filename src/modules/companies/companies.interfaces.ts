import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { List, Pagination } from '../../app.interfaces';
import { Company } from './entities/company.entity';
import { queryArrayTransformer } from '../../common/queryArrayTransformer';

export class CompaniesList extends List {
  @ApiProperty({ type: [Company] })
  items: Company[];
}

export class CompaniesListQuery extends Pagination {
  @ApiPropertyOptional()
  @Transform(queryArrayTransformer)
  cityIds?: number[];

  @ApiPropertyOptional()
  @Transform(queryArrayTransformer)
  specialityIds?: number[];

  @ApiPropertyOptional()
  q?: string;
}
