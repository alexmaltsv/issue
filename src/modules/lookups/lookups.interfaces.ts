import { ApiProperty } from '@nestjs/swagger';
import { City } from './entities/city.entity';
import { Speciality } from './entities/speciality.entity';

export class CityList {
  @ApiProperty({ type: [City] })
  items: City[];
}

export class specialityList {
  @ApiProperty({ type: [Speciality] })
  items: Speciality[];
}
