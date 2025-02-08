import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BackpescaDto } from './backpesca.dto';
import { BackpescaService } from './backpesca.service';

@Controller('backpesca')
export class BackpescaController {
  constructor(private readonly backpescaService: BackpescaService) {}

  @Post()
  create(@Body() backpesca: BackpescaDto) {
    this.backpescaService.create(backpesca);
  }
}
