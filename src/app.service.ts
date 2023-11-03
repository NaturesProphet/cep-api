import { Injectable } from '@nestjs/common';
import { CEPService } from './cep/cep.service';

@Injectable()
export class AppService {
  constructor(private readonly cepService: CEPService) {}

  consultaCEP(cep: string) {
    return this.cepService.consultaCEP(cep);
  }
}
