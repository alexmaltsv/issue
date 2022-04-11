import { Controller, Get } from '@nestjs/common';
import { LookupsService } from './lookups.service';
import { City, Speciality } from './entities';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('lookups')
@Controller('lookups')
export class LookupsController {
  constructor(private readonly lookupsService: LookupsService) {}

  @Get('cities')
  @ApiOperation({ summary: 'Get lookups cities' })
  @ApiOkResponse({ type: [City] })
  getCities(): Promise<City[]> {
    return this.lookupsService.getCities();
  }

  @Get('specialities')
  @ApiOperation({ summary: 'Get lookups specialities' })
  @ApiOkResponse({ type: [Speciality] })
  getSpecialities(): Promise<Speciality[]> {
    return this.lookupsService.getSpecialities();
  }
}
