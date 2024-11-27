import type { EnumStatus } from '~/types/deals.types'

export interface ICard {
	id: string
	name: string
	price: number
	companyName: string
	status: string
	$createdAt: string
}

export interface IColumn {
	id: EnumStatus
	name: string
	items: ICard[]
}
