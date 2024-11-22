<script setup lang="ts"></script>

<template>
	<div class="bg-midnight h-full w-full">
		<div class="p-10">
			<h1 class="font-bold text-2xl text-white mb-10">CRM System</h1>
			<div></div>
		</div>
		<v-container>
			<v-row>
				<v-col cols="2" sm="8" md="2">
					<v-card draggable="true">
						<v-card-title>Простая карточка</v-card-title>
						<v-card-text>
							Это пример карточки из Vuetify. Ты можешь легко кастомизировать
							её.
						</v-card-text>
						<v-card-text>
							Это пример карточки из Vuetify. Ты можешь легко кастомизировать
							её.
						</v-card-text>
						<v-card-actions>
							<v-btn color="primary">Кнопка</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
