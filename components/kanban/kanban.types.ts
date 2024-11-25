export interface ICard {
	id: number
	name: string
	price: number
	companyName: string
	status: string
	$createdAt: string
}

export interface IColumn {
	id: number
	name: string
	items: ICard[]
}
