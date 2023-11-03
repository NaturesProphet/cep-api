import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CEPModule } from './cep/cep.module';

@Module({
  imports: [CEPModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
