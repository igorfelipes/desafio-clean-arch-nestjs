import { Test } from '@nestjs/testing';
import { ClientUseCases } from './client.use-cases';
import { IDataServices } from '../../core/abstracts';
import { ClientFactoryService } from './client-factory.service';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos/client.dto';
import { mock } from 'jest-mock-extended';
import { Client } from 'src/core'

describe('ClientUseCases', () => {
  let clientUseCases: ClientUseCases;
  let dataServices: IDataServices;
  let clientFactoryService: ClientFactoryService;

  beforeEach(async () => {
    dataServices = mock<IDataServices>();
    clientFactoryService = mock<ClientFactoryService>();

    const moduleRef = await Test.createTestingModule({
      providers: [
        ClientUseCases,
        { provide: IDataServices, useValue: dataServices },
        { provide: ClientFactoryService, useValue: clientFactoryService },
      ],
    }).compile();

    clientUseCases = moduleRef.get<ClientUseCases>(ClientUseCases);
  });

  describe('getAllClients', () => {
    it('should return all clients', async () => {
      const clients: Client[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: "+5598781771" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: "+5598781771" },
      ];

      dataServices.clients.getAll = jest.fn().mockResolvedValue(clients);

      const result = await clientUseCases.getAllClients();

      expect(result).toEqual(clients);
      expect(dataServices.clients.getAll).toHaveBeenCalled();
    });
  });

  describe('getClientById', () => {
    it('should return a client by ID', async () => {
      const clientId = '1';
      const client: Client = { id: 1, name: 'John Doe', email: 'john@example.com', phone: "+5598781771" };

      dataServices.clients.get = jest.fn().mockResolvedValue(client);

      const result = await clientUseCases.getClientById(clientId);

      expect(result).toEqual(client);
      expect(dataServices.clients.get).toHaveBeenCalledWith(clientId);
    });
  });

  describe('createClient', () => {
    it('should create a new client', async () => {
      const createClientDto: CreateClientDto = { name: 'John Doe', email: 'john@example.com', phone: "+5598781771" };
      const createdClient: Client = { id: 1, ...createClientDto };

      clientFactoryService.createNewClient = jest.fn().mockReturnValue(createdClient);
      dataServices.clients.create = jest.fn().mockResolvedValue(createdClient);

      const result = await clientUseCases.createClient(createClientDto);

      expect(result).toEqual(createdClient);
      expect(clientFactoryService.createNewClient).toHaveBeenCalledWith(createClientDto);
      expect(dataServices.clients.create).toHaveBeenCalledWith(createdClient);
    });
  });

  describe('updateClient', () => {
    it('should update an existing client', async () => {
      const clientId = '1';
      const updateClientDto: UpdateClientDto = { name: 'John Doe', email: 'john@example.com' };
      const updatedClient: Partial<Client> = { id: 1, ...updateClientDto };

      clientFactoryService.updateClient =jest.fn().mockReturnValue(updatedClient);
      dataServices.clients.update = jest.fn().mockResolvedValue(updatedClient);

      const result = await clientUseCases.updateClient(clientId, updateClientDto);

      expect(result).toEqual(updatedClient);
      expect(clientFactoryService.updateClient).toHaveBeenCalledWith(updateClientDto);
      expect(dataServices.clients.update).toHaveBeenCalledWith(clientId, updatedClient);
    });
  });
});