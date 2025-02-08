import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackpescaModule } from './backpesca/backpesca.module';

@Module({
  imports: [BackpescaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
