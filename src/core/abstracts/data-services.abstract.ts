import { Purchase } from 'src/core/entities/purchase.entity'
import {  Product, Customer } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';
import { IPurchaseRepository } from './purchase-repository.abstract';

export abstract class IDataServices {
  abstract products: IGenericRepository<Product>;

  abstract customers: IGenericRepository<Customer>;

  abstract purchases: IPurchaseRepository<Purchase>

}
