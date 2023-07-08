import { Injectable } from '@nestjs/common';
import { Customer } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CustomerFactoryService } from './customer-factory.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../../core/dtos/customer.dto';

@Injectable()
export class CustomerUseCases {
  constructor(
    private dataServices: IDataServices,
    private customerFactoryService: CustomerFactoryService,
  ) {}

  getAllCustomers(): Promise<Customer[]> {
    return this.dataServices.customers.getAll();
  }

  getCustomerById(id: any): Promise<Customer> {
    return this.dataServices.customers.get(id);
  }

  createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerFactoryService.createNewCustomer(createCustomerDto);
    return this.dataServices.customers.create(customer);
  }

  updateCustomer(
    customerId: string,
    updateCustomertDto: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = this.customerFactoryService.updateCustomer(updateCustomertDto);
    return this.dataServices.customers.update(customerId, customer);
  }
}