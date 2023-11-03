import cep from 'cep-promise';
import { CEPService } from './cep.service';

jest.mock('cep-promise'); // Mock a dependência externa

describe('CEPService', () => {
  let cepService: CEPService;

  beforeEach(() => {
    cepService = new CEPService();
  });

  it('should return CEP information', async () => {
    const mockCepData = {
      street: '123 Main St',
      neighborhood: 'Downtown',
      city: 'Example City',
      state: 'EX',
    };

    (cep as jest.Mock).mockResolvedValue(mockCepData);

    const cepValue = '12345678';
    const result = await cepService.consultaCEP(cepValue);

    expect(result).toEqual(mockCepData);
    expect(cep).toHaveBeenCalledWith(cepValue);
  });

  it('should handle CEP lookup error', async () => {
    const error = new Error('CEP lookup failed');

    (cep as jest.Mock).mockRejectedValue(error);

    const cepValue = '87654321';
    try {
      await cepService.consultaCEP(cepValue);
    } catch (error) {
      expect(error).toEqual(error);
      expect(cep).toHaveBeenCalledWith(cepValue);
    }
  });
});
