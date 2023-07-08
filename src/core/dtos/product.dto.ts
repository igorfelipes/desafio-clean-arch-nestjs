import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
