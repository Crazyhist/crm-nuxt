<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store'

useSeoMeta({
	title: 'Login | CRM',
})
const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
	isLoadingStore.set(true)
	await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
	const response = await account.get()
	if (response) {
		authStore.set({
			email: response.email,
			name: response.name,
			status: response.status,
		})
	}

	emailRef.value = ''
	passwordRef.value = ''
	nameRef.value = ''

	await router.push('/')
	isLoadingStore.set(false)
}

const register = async () => {}
</script>

<template>
	<div class="flex justify-center items-center min-h-screen w-full">
		<div class="rounded bg-slate-300 w-1/4 p-5">
			<h1 class="text-2xl font-bold text-center mb-5">Login</h1>
			<form action=""></form>
			<!-- <v-container>
				<v-btn color="primary">Hello Vuetify in Nuxt 3!</v-btn>
			</v-container> -->
		</div>
	</div>
</template>
