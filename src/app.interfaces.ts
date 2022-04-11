import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Pagination {
  @ApiPropertyOptional({ default: 0 })
  offset?: number = 0;

  @ApiPropertyOptional({ default: 20 })
  limit?: number = 20;
}

export abstract class List extends Pagination {
  @ApiProperty()
  total?: number;

  abstract items: any;
}
