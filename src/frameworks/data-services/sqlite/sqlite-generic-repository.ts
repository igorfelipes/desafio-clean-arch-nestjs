import { Repository, FindOptionsWhere, Entity } from 'typeorm';
import { IGenericRepository } from '../../../core/abstracts/generic-repository.abstract';

export class SqliteGenericRepository<T> implements IGenericRepository<T>{

	private _repository: Repository<T>;
	private _populateOnFind: string[];

	constructor(repository: any, populateOnFind: string[] = []) {
		this._repository = repository;
		this._populateOnFind = populateOnFind;
	}
	getAll(): Promise<T[]> {
		return this._repository.find()
	}
	get(id: string): Promise<T> {
		return this._repository.findOneBy(
			{ id } as unknown as FindOptionsWhere<T>
		)
	}
	create(item: T): Promise<T> {
		return this._repository.save(item)
	}
	update(id: string, item: T) {
		return this._repository.update(id, item)
	}

}