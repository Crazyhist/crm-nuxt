interface IAuthStore {
	email: string
	name: string
	status: boolean
}

const defaultValue: { user: IAuthStore } = {
	user: {
		email: '',
		name: '',
		status: false,
	},
}

// export const useAuthStore = defineStore('auth', {
// 	state: () => defaultValue,
// })