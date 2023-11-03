import { Injectable } from '@nestjs/common';
import cep from 'cep-promise';

@Injectable()
export class CEPService {
  async consultaCEP(value: string) {
    return await cep(value);
  }
}
