import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from '../../../core/abstracts/data-services.abstract';
import { SqliteGenericRepository } from './sqlite-generic-repository';
import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { Customer } from './entities/customer.entity';
import { IPurchaseRepository } from '../../../core/abstracts/purchase-repository.abstract';
import { Purchase } from './entities/purchase.entity';
import { SqlitePurchaseRepository } from './sqlite-purchase-repository';


@Injectable()
export class SqliteDataServices implements IDataServices, OnApplicationBootstrap{
	products: SqliteGenericRepository<Product>;
	customers: SqliteGenericRepository<Customer>;
	purchases: IPurchaseRepository<Purchase>;

	constructor(private readonly dataSource: DataSource) {}

	onApplicationBootstrap() {
		this.products = new SqliteGenericRepository<Product>(this.dataSource.getRepository(Product));
		this.customers = new SqliteGenericRepository<Customer>(this.dataSource.getRepository(Customer));
		this.purchases = new SqlitePurchaseRepository(this.dataSource.getRepository(Purchase))
	}
}
