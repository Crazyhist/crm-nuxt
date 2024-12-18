// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	modules: [
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'@nuxt/icon',
		'@pinia/nuxt',
		[
			'@vee-validate/nuxt',
			{
				autoImports: true,
			},
		],

		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	build: {
		transpile: ['vuetify'],
	},
	ssr: true,
})
