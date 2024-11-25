<script setup lang="ts">
useSeoMeta({
	title: 'Home | CRM System',
})
</script>

<template>
	<div class="bg-midnight h-full w-full">
		<div class="p-10">
			<h1 class="font-bold text-2xl text-white mb-10">CRM System</h1>
			<div draggable="true" class="rounded-xl border transition-colors">
				<v-card
					color="indigo-darken-3"
					label="indigo-darken-3"
					value="indigo-darken-3"
					title="Card title"
					subtitle="Subtitle"
					text="..."
				></v-card>
			</div>
		</div>
	</div>
</template>
