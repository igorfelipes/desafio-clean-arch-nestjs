import { Test } from '@nestjs/testing';
import { PurchaseUseCases } from './purchase.use-cases';
import { IDataServices } from '../../core/abstracts';
import { PurchaseFactoryService } from './purchase-factory.service';
import { CreatePurchaseDto } from '../../core/dtos/purchase.dto';
import { mock } from 'jest-mock-extended';
import { Purchase } from 'src/core'

describe('PurchaseUseCases', () => {
  let purchaseUseCases: PurchaseUseCases;
  let dataServices: IDataServices;
  let purchaseFactoryService: PurchaseFactoryService;

  beforeEach(async () => {
    dataServices = mock<IDataServices>();
    purchaseFactoryService = mock<PurchaseFactoryService>();

    const moduleRef = await Test.createTestingModule({
      providers: [
        PurchaseUseCases,
        { provide: IDataServices, useValue: dataServices },
        { provide: PurchaseFactoryService, useValue: purchaseFactoryService },
      ],
    }).compile();

    purchaseUseCases = moduleRef.get<PurchaseUseCases>(PurchaseUseCases);
  });

  describe('createPurchase', () => {
    it('should create a new purchase', async () => {
      const createPurchaseDto: CreatePurchaseDto = {
        customerId: 1,
        productId: 1,
        quantity: 2,
      };
      const createdPurchase: Purchase = {
        id: '1',
        customerId: createPurchaseDto.customerId,
        productId: createPurchaseDto.productId,
        quantity: createPurchaseDto.quantity,
      };

      purchaseFactoryService.createNewPurchase = jest.fn().mockReturnValue(createdPurchase);
      dataServices.purchases.createPurchase = jest.fn().mockResolvedValue(createdPurchase);

      const result = await purchaseUseCases.createPurchase(createPurchaseDto);

      expect(result).toEqual(createdPurchase);
      expect(purchaseFactoryService.createNewPurchase).toHaveBeenCalledWith(createPurchaseDto);
      expect(dataServices.purchases.createPurchase).toHaveBeenCalledWith(createdPurchase);
    });
  });
});