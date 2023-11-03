import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CEPResponseDTO } from './DTOs/cep.rresponse.dto';

@Controller()
@ApiTags('CEP')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':cep')
  @ApiOperation({
    summary: 'Consulta CEP',
  })
  @ApiParam({
    name: 'cep',
    description: 'CEP',
    example: '29146200',
  })
  @ApiResponse({
    type: CEPResponseDTO,
    status: 200,
    description: 'Consulta OK',
  })
  consultaCEP(@Param('cep') cep: string) {
    return this.appService.consultaCEP(cep);
  }
}
