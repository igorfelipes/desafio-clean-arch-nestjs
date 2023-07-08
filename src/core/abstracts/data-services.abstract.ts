import {  Product, Customer } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract products: IGenericRepository<Product>;

  abstract customers: IGenericRepository<Customer>;

}
