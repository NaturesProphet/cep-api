import { Module } from '@nestjs/common';
import { CEPService } from './cep.service';

@Module({
  providers: [CEPService],
  exports: [CEPService],
})
export class CEPModule {}
