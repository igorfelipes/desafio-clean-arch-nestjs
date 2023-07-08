import { Injectable } from '@nestjs/common';
import { Client } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { ClientFactoryService } from './client-factory.service';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos/client.dto';

@Injectable()
export class ClientUseCases {
  constructor(
    private dataServices: IDataServices,
    private clientFactoryService: ClientFactoryService,
  ) {}

  getAllClients(): Promise<Client[]> {
    return this.dataServices.clients.getAll();
  }

  getClientById(id: any): Promise<Client> {
    return this.dataServices.clients.get(id);
  }

  createClient(createClientDto: CreateClientDto): Promise<Client> {
    const client = this.clientFactoryService.createNewClient(createClientDto);
    return this.dataServices.clients.create(client);
  }

  updateClient(
    clientId: string,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const client = this.clientFactoryService.updateClient(updateClientDto);
    return this.dataServices.clients.update(clientId, client);
  }
}