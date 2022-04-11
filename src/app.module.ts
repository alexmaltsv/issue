import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LookupsModule } from './modules/lookups';
import { CompaniesModule } from './modules/companies';

@Module({
  imports: [TypeOrmModule.forRoot(), LookupsModule, CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
