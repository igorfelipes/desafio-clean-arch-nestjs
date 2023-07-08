import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateClientDto {
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

export class UpdateClientDto extends PartialType(CreateClientDto) {}
