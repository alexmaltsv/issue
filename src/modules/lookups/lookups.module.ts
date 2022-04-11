import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LookupsController } from './lookups.controller';
import { LookupsService } from './lookups.service';
import { City } from './entities/city.entity';
import { Speciality } from './entities/speciality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, Speciality])],
  controllers: [LookupsController],
  providers: [LookupsService],
})
export class LookupsModule {}
