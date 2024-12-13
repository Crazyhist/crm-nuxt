<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import dayjs from 'dayjs'
import type { ICard, IColumn } from '~/components/kanban/kanban.types'
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery'
import type { EnumStatus } from '~/types/deals.types'

useSeoMeta({
	title: 'Home | CRM System',
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
const { data, isLoading, refetch } = useKanbanQuery()

// watch(isLoading,() =>)
type TypeMutationVariables = {
	docId: string
	status?: EnumStatus
}

const { mutate } = useMutation({
	mutationKey: ['move card'],
	mutationFn: ({ docId, status }: TypeMutationVariables) =>
		DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
			status,
		}),
	onSuccess: () => {
		refetch()
	},
})

function handleDragStart(card: ICard, column: IColumn) {
	dragCardRef.value = card
	sourceColumnRef.value = column
}

function handleDragOver(event: DragEvent) {
	event.preventDefault()
}

function handleDrop(targetColumn: IColumn) {
	if (dragCardRef.value && sourceColumnRef.value) {
		mutate({ docId: dragCardRef.value.id, status: targetColumn.id })
	}
}
</script>

<template>
	<div class="bg-midnight h-full w-full">
		<div class="p-10">
			<h1 class="font-bold text-2xl text-white mb-10">CRM System</h1>
			<div v-if="isLoading" class="text-white">Loading...</div>
			<div v-else>
				<div class="grid grid-cols-5 gap-16">
					<div
						v-for="(column, index) in data"
						:key="column.id"
						class="min-h-screen"
						@dragover="handleDragOver"
						@drop="() => handleDrop(column)"
					>
						<div
							class="rounded bg-slate-700 py-1 px-5 mb-2 text-center text-white"
						>
							{{ column.name }}
						</div>
						<KanbanCreateDeal :refetch="refetch" :status="column.id" />
						<div
							v-for="card in column.items"
							:key="card.id"
							draggable="true"
							@dragstart="() => handleDragStart(card, column)"
							class="mb-2"
						>
							<v-card
								color="indigo-darken-3"
								label="indigo-darken-3"
								value="indigo-darken-3"
								class="cursor-grab rounded-lg"
							>
								<v-card-item class="">
									<v-card-title> {{ card.name }} </v-card-title>
									<v-card-subtitle class="pa-0">
										{{ convertCurrency(card.price) }}
									</v-card-subtitle>
								</v-card-item>

								<v-card-item class="">
									<v-card-text class="pa-0">
										{{ card.companyName }}
									</v-card-text>
									<v-card-subtitle class="">
										{{ dayjs(card.$createdAt).format('DD MMM YYYY') }}
									</v-card-subtitle>
								</v-card-item>
							</v-card>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
