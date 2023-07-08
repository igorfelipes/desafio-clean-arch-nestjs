import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from '../../../core/abstracts/data-services.abstract';
import { SqliteGenericRepository } from './sqlite-generic-repository';
import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';
import { Client } from './entities/client.entity';

@Injectable()
export class SqliteDataServices implements IDataServices, OnApplicationBootstrap{
	products: SqliteGenericRepository<Product>;
	clients: SqliteGenericRepository<Client>

	constructor(private readonly dataSource: DataSource) {}

	onApplicationBootstrap() {
		this.products = new SqliteGenericRepository<Product>(this.dataSource.getRepository(Product));
		this.clients = new SqliteGenericRepository<Client>(this.dataSource.getRepository(Client));
	}
}
