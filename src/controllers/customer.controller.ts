import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CustomerUseCases } from '../use-cases/customer/customer.use-cases';
import { CreateCustomerDto, UpdateCustomerDto } from '../core/dtos/customer.dto';

@Controller('api/customer')
export class CustomerController {
  constructor(
    private customerUseCases: CustomerUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.customerUseCases.getAllCustomers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.customerUseCases.getCustomerById(id);
  }

  @Post()
  async createCustomer(@Body() customerDto: CreateCustomerDto) {
    return this.customerUseCases.createCustomer(customerDto);
  }

  @Put(':id')
  updateCustomer(
    @Param('id') customerId: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerUseCases.updateCustomer(customerId, updateCustomerDto);
  }
}
