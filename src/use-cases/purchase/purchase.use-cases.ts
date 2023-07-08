import { Injectable } from '@nestjs/common';
import { Purchase } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

import { PurchaseFactoryService } from './purchase-factory.service';
import { CreatePurchaseDto } from '../../core/dtos/purchase.dto';

@Injectable()
export class PurchaseUseCases {
  constructor(
    private dataServices: IDataServices,
    private purchaseFactoryService: PurchaseFactoryService,
  ) {}

  createPurchase(createPurchaseDto: CreatePurchaseDto): Promise<Purchase> {
    const purchase = this.purchaseFactoryService.createNewPurchase(createPurchaseDto);
    return this.dataServices.purchases.createPurchase(purchase);
  }

}