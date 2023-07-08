import { Injectable } from '@nestjs/common';
import { Client } from '../../core/entities/client.entity';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos/client.dto';

@Injectable()
export class ClientFactoryService {
  createNewClient(createClientDto: CreateClientDto) {
    const newClient = new Client();
    newClient.name = createClientDto.name;
    newClient.email = createClientDto.email;
    newClient.phone = createClientDto.phone;

    return newClient;
  }

  updateClient(updateClientDto: UpdateClientDto) {
    const updatedClient = new Client();
    updatedClient.name = updateClientDto.name;
    updatedClient.email = updateClientDto.email;
    updatedClient.phone = updateClientDto.phone;

    return updatedClient;
  }
}