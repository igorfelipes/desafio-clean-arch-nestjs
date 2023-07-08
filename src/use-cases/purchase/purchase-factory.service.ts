import { Injectable } from '@nestjs/common';
import { Purchase } from '../../core/entities';
import { CreatePurchaseDto } from '../../core/dtos/purchase.dto';

@Injectable()
export class PurchaseFactoryService {
  createNewPurchase(createPurchaseDto: CreatePurchaseDto) {
    const newPurchase = new Purchase();
		newPurchase.customerId = createPurchaseDto.customerId;
		newPurchase.productId = createPurchaseDto.productId;
		newPurchase.quantity = createPurchaseDto.quantity;

    return newPurchase;
  }

}