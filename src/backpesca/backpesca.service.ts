import {
  HttpException,
  HttpStatus,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { BackpescaDto } from './backpesca.dto';

@Injectable()
export class BackpescaService {
  private backpescas: BackpescaDto[] = [];

  create(backpesca: BackpescaDto) {
    this.backpescas.push(backpesca);
  }

  findById(id: string): BackpescaDto {
    const foundBackpesca = this.backpescas.filter((t) => t.id === id);

    if (foundBackpesca.length) {
      return foundBackpesca[0];
    }

    throw new HttpException(
      'Backpesca with id ${id} not found',
      HttpStatus.NOT_FOUND,
    );
  }

  update(backpesca: BackpescaDto) {
    const backpescaIndex = this.backpescas.findIndex(
      (t) => t.id === backpesca.id,
    );
    if (backpescaIndex >= 0) {
      this.backpescas[backpescaIndex] = backpesca;
      return;
    }

    throw new HttpException(
      'backpesca with id ${backpesca.id} not found',
      HttpStatus.BAD_REQUEST
    );
  }
}
