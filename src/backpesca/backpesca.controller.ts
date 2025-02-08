import { Body, Controller, Post } from '@nestjs/common';
import { BackpescaDto } from './backpesca.dto';

@Controller('backpesca')
export class BackpescaController {
  @Post()
  create(@Body() backpesca: BackpescaDto) {
    console.log(backpesca);
  }
}
