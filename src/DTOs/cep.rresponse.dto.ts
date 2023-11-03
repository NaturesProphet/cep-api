import { ApiProperty } from '@nestjs/swagger';

export class CEPResponseDTO {
  @ApiProperty({ example: '29146200' })
  cep: string;

  @ApiProperty({ example: 'ES' })
  state: string;

  @ApiProperty({ example: 'Cariacica' })
  city: string;

  @ApiProperty({ example: 'Campo Grande' })
  neighborhood: string;

  @ApiProperty({ example: 'Avenida Expedito Garcia' })
  street: string;

  @ApiProperty({ example: 'Correios' })
  service: string;
}
