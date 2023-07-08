import { Injectable } from '@nestjs/common';
import { Customer } from '../../core/entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../../core/dtos/customer.dto';

@Injectable()
export class CustomerFactoryService {
  createNewCustomer(createCustomerDto: CreateCustomerDto) {
    const newCustomer = new Customer();
    newCustomer.name = createCustomerDto.name;
    newCustomer.email = createCustomerDto.email;
    newCustomer.phone = createCustomerDto.phone;

    return newCustomer;
  }

  updateCustomer(updateCustomerDto: UpdateCustomerDto) {
    const updatedCustomer = new Customer();
    updatedCustomer.name = updateCustomerDto.name;
    updatedCustomer.email = updateCustomerDto.email;
    updatedCustomer.phone = updateCustomerDto.phone;

    return updatedCustomer;
  }
}