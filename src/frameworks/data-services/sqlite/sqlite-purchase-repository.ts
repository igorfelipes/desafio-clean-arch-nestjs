import { Purchase } from '../sqlite/entities/purchase.entity'
import { IPurchaseRepository } from '../../../core/abstracts/purchase-repository.abstract';
import { Repository } from 'typeorm';
export class SqlitePurchaseRepository implements IPurchaseRepository<Purchase> {
	private _repository: Repository<Purchase>;

	constructor(repository: any) {
		this._repository = repository;
	}
	createPurchase(purchase: Purchase): Promise<Purchase> {
		return this._repository.save(purchase)
	}
}