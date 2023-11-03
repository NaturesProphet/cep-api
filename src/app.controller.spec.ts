import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CEPService } from './cep/cep.service';
import cep from 'cep-promise';

jest.mock('cep-promise');

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, CEPService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('get cep', () => {
    const mockCepData = {
      street: '123 Main St',
      neighborhood: 'Downtown',
      city: 'Example City',
      state: 'EX',
    };
    (cep as jest.Mock).mockResolvedValue(mockCepData);
    it('should return CEP information', async () => {
      expect(await appController.consultaCEP('12345678')).toEqual(mockCepData);
    });
  });
});
