import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity()
export class Purchase {
  @PrimaryColumn()
  @Generated('uuid')
	id: number

	@Column()
	customerId: number

	@Column()
	productId: number
	
	@Column()
	quantity: number
}