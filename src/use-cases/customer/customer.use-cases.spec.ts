import { Test } from '@nestjs/testing';
import { CustomerUseCases } from './customer.use-cases';
import { IDataServices } from '../../core/abstracts';
import { CustomerFactoryService } from './customer-factory.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../../core/dtos/customer.dto';
import { mock } from 'jest-mock-extended';
import { Customer } from 'src/core'

describe('CustomerUseCases', () => {
  let customerUseCases: CustomerUseCases;
  let dataServices: IDataServices;
  let customerFactoryService: CustomerFactoryService;

  beforeEach(async () => {
    dataServices = mock<IDataServices>();
    customerFactoryService = mock<CustomerFactoryService>();

    const moduleRef = await Test.createTestingModule({
      providers: [
        CustomerUseCases,
        { provide: IDataServices, useValue: dataServices },
        { provide: CustomerFactoryService, useValue: customerFactoryService },
      ],
    }).compile();

    customerUseCases = moduleRef.get<CustomerUseCases>(CustomerUseCases);
  });

  describe('getAllCustomers', () => {
    it('should return all customers', async () => {
      const customers: Customer[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: "+5598781771" },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: "+5598781771" },
      ];

      dataServices.customers.getAll = jest.fn().mockResolvedValue(customers);

      const result = await customerUseCases.getAllCustomers();

      expect(result).toEqual(customers);
      expect(dataServices.customers.getAll).toHaveBeenCalled();
    });
  });

  describe('getCustomerById', () => {
    it('should return a customer by ID', async () => {
      const customerId = '1';
      const customer: Customer = { id: 1, name: 'John Doe', email: 'john@example.com', phone: "+5598781771" };

      dataServices.customers.get = jest.fn().mockResolvedValue(customer);

      const result = await customerUseCases.getCustomerById(customerId);

      expect(result).toEqual(customer);
      expect(dataServices.customers.get).toHaveBeenCalledWith(customerId);
    });
  });

  describe('createCustomer', () => {
    it('should create a new customer', async () => {
      const createCustomerDto: CreateCustomerDto = { name: 'John Doe', email: 'john@example.com', phone: "+5598781771" };
      const createdCustomer: Customer = { id: 1, ...createCustomerDto };

      customerFactoryService.createNewCustomer = jest.fn().mockReturnValue(createdCustomer);
      dataServices.customers.create = jest.fn().mockResolvedValue(createdCustomer);

      const result = await customerUseCases.createCustomer(createCustomerDto);

      expect(result).toEqual(createdCustomer);
      expect(customerFactoryService.createNewCustomer).toHaveBeenCalledWith(createCustomerDto);
      expect(dataServices.customers.create).toHaveBeenCalledWith(createdCustomer);
    });
  });

  describe('updateCustomer', () => {
    it('should update an existing customer', async () => {
      const customerId = '1';
      const updateCustomerDto: UpdateCustomerDto = { name: 'John Doe', email: 'john@example.com' };
      const updatedCustomer: Partial<Customer> = { id: 1, ...updateCustomerDto };

      customerFactoryService.updateCustomer =jest.fn().mockReturnValue(updatedCustomer);
      dataServices.customers.update = jest.fn().mockResolvedValue(updatedCustomer);

      const result = await customerUseCases.updateCustomer(customerId, updateCustomerDto);

      expect(result).toEqual(updatedCustomer);
      expect(customerFactoryService.updateCustomer).toHaveBeenCalledWith(updateCustomerDto);
      expect(dataServices.customers.update).toHaveBeenCalledWith(customerId, updatedCustomer);
    });
  });
});