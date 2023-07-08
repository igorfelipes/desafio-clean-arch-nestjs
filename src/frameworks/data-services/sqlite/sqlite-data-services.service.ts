import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from '../../../core/abstracts/data-services.abstract';
import { SqliteGenericRepository } from './sqlite-generic-repository';
import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { Customer } from './entities/customer.entity';

@Injectable()
export class SqliteDataServices implements IDataServices, OnApplicationBootstrap{
	products: SqliteGenericRepository<Product>;
	customers: SqliteGenericRepository<Customer>

	constructor(private readonly dataSource: DataSource) {}

	onApplicationBootstrap() {
		this.products = new SqliteGenericRepository<Product>(this.dataSource.getRepository(Product));
		this.customers = new SqliteGenericRepository<Customer>(this.dataSource.getRepository(Customer));
	}
}
