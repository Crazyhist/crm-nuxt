import { createVuetify } from 'vuetify'
import { VApp } from 'vuetify/components/VApp'
import { VBtn } from 'vuetify/components/VBtn'
import { VCard, VCardSubtitle, VCardTitle } from 'vuetify/components/Vcard'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components: {
			VBtn,
			VCard,
			VApp,
			VTextField,
			VCardTitle,
			VCardSubtitle,
			VForm,
		},

		ssr: true,
	})

	nuxtApp.vueApp.use(vuetify)
})
