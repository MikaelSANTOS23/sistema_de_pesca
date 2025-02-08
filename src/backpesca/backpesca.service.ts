import { Injectable } from '@nestjs/common';
import { BackpescaDto } from './backpesca.dto';

@Injectable()
export class BackpescaService {
  private backpescas: BackpescaDto[] = [];

  create(backpesca: BackpescaDto) {
    this.backpescas.push(backpesca);
  }
}
