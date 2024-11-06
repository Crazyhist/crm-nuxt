<script lang="ts" setup></script>

<template>
	<aside class="w-full h-full px-5 py-8 relative bg-cyan-900">
		<nuxt-link to="/" class="mb-10 block">
			<NuxtImg src="/logo.svg" alt="Logo" width="100px" class="mx-auto" />
		</nuxt-link>
		<button class="absolute top-2 right-3 transition-colors">
			<Icon name="line-md:logout" size="20" />
		</button>
		<LayoutMenu />
	</aside>
</template>
