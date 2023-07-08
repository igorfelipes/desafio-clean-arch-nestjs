import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ClientUseCases } from '../use-cases/client/client.use-cases';
import { CreateClientDto, UpdateClientDto } from '../core/dtos/client.dto';

@Controller('api/client')
export class ClientController {
  constructor(
    private clientUseCases: ClientUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.clientUseCases.getAllClients();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.clientUseCases.getClientById(id);
  }

  @Post()
  async createClient(@Body() clientDto: CreateClientDto) {
    return this.clientUseCases.createClient(clientDto);
  }

  @Put(':id')
  updateClient(
    @Param('id') clientId: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientUseCases.updateClient(clientId, updateClientDto);
  }
}
