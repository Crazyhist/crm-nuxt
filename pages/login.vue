<script setup lang="ts">
import { v4 as uuid } from 'uuid'
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

const register = async () => {
	await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
	await login()
}
</script>

<template>
	<div class="d-flex justify-center align-center min-h-screen bg-midnight">
		<v-card class="pa-5" max-width="400px" elevation="2">
			<v-card-title class="text-center">Login</v-card-title>
			<v-form>
				<v-text-field
					v-model="emailRef"
					label="Email"
					type="email"
					required
					outlined
					dense
				/>
				<v-text-field
					v-model="passwordRef"
					label="Password"
					type="password"
					required
					outlined
					dense
				/>
				<v-text-field
					v-model="nameRef"
					label="Name (optional)"
					type="text"
					outlined
					dense
				/>

				<v-row class="mt-4">
					<v-col cols="12" sm="6">
						<v-btn type="submit" color="primary" class="w-full" @click="login">
							Login
						</v-btn>
					</v-col>

					<v-col cols="12" sm="6">
						<v-btn
							type="button"
							color="success"
							class="w-full"
							@click="register"
						>
							Register
						</v-btn>
					</v-col>
				</v-row>
			</v-form>
		</v-card>
	</div>
</template>
