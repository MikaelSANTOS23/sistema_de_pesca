import { Module } from '@nestjs/common';
import { BackpescaController } from './backpesca.controller';
import { BackpescaService } from './backpesca.service';

@Module({
  controllers: [BackpescaController],
  providers: [BackpescaService],
})
export class BackpescaModule {}
