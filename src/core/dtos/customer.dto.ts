import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
