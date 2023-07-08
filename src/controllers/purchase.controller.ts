import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { PurchaseUseCases } from '../use-cases/purchase/purchase.use-cases';
import { CreatePurchaseDto } from '../core/dtos/purchase.dto';


@Controller('api/purchase')
export class PurchaseController {
  constructor(
    private purchaseUseCases: PurchaseUseCases,
  ) {}


  @Post()
  async createPurchase(@Body() purchaseDto: CreatePurchaseDto) {
    return this.purchaseUseCases.createPurchase(purchaseDto);
  }

  @Get('sold-products')
  async getSoldProducts() {
    return this.purchaseUseCases.getSoldProducts();
  }

}