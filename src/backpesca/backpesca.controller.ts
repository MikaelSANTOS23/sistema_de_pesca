import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BackpescaDto } from './backpesca.dto';
import { BackpescaService } from './backpesca.service';

@Controller('backpesca')
export class BackpescaController {
  constructor(private readonly backpescaService: BackpescaService) {}

  @Post()
  create(@Body() backpesca: BackpescaDto) {
    this.backpescaService.create(backpesca);
  }

  @Get('/:id')
  findById(@Param('id') id: string): BackpescaDto {
    return this.backpescaService.findById(id);
  }

  @Put()
  update(@Body() backpesca: BackpescaDto) {
    this.backpescaService.update(backpesca);
  }
}
