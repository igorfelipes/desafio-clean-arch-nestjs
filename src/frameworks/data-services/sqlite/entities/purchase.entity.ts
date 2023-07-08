import { Column, Entity, Generated, PrimaryColumn } from 'typeorm'

@Entity()
export class Purchase {
  @PrimaryColumn()
  @Generated('uuid')
	id: string

	@Column()
	customerId: number

	@Column()
	productId: number
	
	@Column()
	quantity: number
}