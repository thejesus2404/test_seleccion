import { Controller, Get, Param } from '@nestjs/common';

@Controller('operation')
export class OperationController {
  @Get(':n1-:n2-:n3')
  operation(
    @Param('n1') n1: number,
    @Param('n2') n2: number,
    @Param('n3') n3: number,
  ): number {
    return Math.sqrt(n1) * Math.sqrt(n2) * Math.sqrt(n3);
  }
}
