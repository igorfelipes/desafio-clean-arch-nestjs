import { IsInt, IsNotEmpty } from 'class-validator';

export class CreatePurchaseDto {

  @IsInt()
  @IsNotEmpty()
  customerId: number;

  @IsInt()
  @IsNotEmpty()
  productId: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}