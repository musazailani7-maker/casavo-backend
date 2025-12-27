import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  health() {
    return {
      status: 'Casavo backend live',
      location: 'Nigeria',
      cities: ['Lagos', 'Abuja'],
      version: '1.0.0'
    };
  }
}
