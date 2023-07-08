export abstract class IPurchaseRepository<Purchase> {
	abstract createPurchase(purchase: Purchase): Promise<Purchase>;
	// abstract getSoldProducts(): Promise<T[]>;

	// abstract getClientPurchasedProduct(id: string): Promise<Purchase>;

}