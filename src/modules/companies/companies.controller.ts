import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CompaniesList, CompaniesListQuery } from './companies.interfaces';

@ApiTags('companies')
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  @ApiQuery({ type: CompaniesListQuery })
  @UsePipes(new ValidationPipe({ transform: true }))
  list(@Query() query: CompaniesListQuery): Promise<CompaniesList> {
    return this.companiesService.list(query);
  }
}
