import { useQuery } from '@tanstack/vue-query'
import type { IDeal } from '~/types/deals.types'
import { COLLECTION_DEALS, DB_ID } from '~/utils/app.constans'
import { KANBAN_DATA } from './kanban.data'
import type { IColumn } from './kanban.types'

export function useKanbanQuery() {
	return useQuery({
		queryKey: ['deals'],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data) {
			// const newBoard = [...KANBAN_DATA] (внутри объект, ссылка то остается)
			const newBoard: IColumn[] = KANBAN_DATA.map((column) => ({
				...column,
				items: [],
			}))

			const deals = data.documents as unknown as IDeal[]
			// Нахождение нужной колонки для дата
			for (const deal of deals) {
				const column = newBoard.find((col) => col.id == deal.status)
				if (column) {
					column.items.push({
						$createdAt: deal.$createdAt,
						id: deal.$id,
						name: deal.name,
						price: deal.price,
						companyName: deal.customer.name,
						status: column.name,
					})
				}
			}
			return newBoard
		},
	})
}
