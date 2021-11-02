import { Controller, Get, Headers } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

@Controller()
export class AppController {
  @ApiHeader({ name: 'x-custom', schema: { type: 'array', items: { type: 'string' } } })
  @Get()
  getHello(
    @Headers('x-custom') custom: string
  ): string {
    return custom[0];
  }
}
