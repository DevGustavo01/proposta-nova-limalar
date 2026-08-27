<template>
  <v-form @submit.prevent="onSubmit('whatsapp')">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="form.name"
          :label="`${fields.name} *`"
          :error-messages="errors.name"
          autocomplete="name"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="form.email"
          :label="`${fields.email} *`"
          type="email"
          :error-messages="errors.email"
          autocomplete="email"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="form.phone" :label="fields.phone" autocomplete="tel" />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field v-model="form.subject" :label="fields.subject" />
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="form.message"
          :label="`${fields.message} *`"
          :error-messages="errors.message"
          rows="5"
        />
      </v-col>
      <v-col cols="12" class="d-flex flex-wrap ga-3">
        <v-btn type="submit" color="primary" class="text-none" :loading="loading">
          {{ submitWhatsApp }}
        </v-btn>
        <v-btn variant="outlined" color="secondary" class="text-none" @click="onSubmit('email')">
          {{ submitEmail }}
        </v-btn>
      </v-col>
    </v-row>
    <v-alert v-if="sent" type="success" class="mt-4" variant="tonal">
      {{ successMessage }}
    </v-alert>
  </v-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validateLead } from '@/domain/models/lead.js'

const props = defineProps({
  fields: { type: Object, required: true },
  submitWhatsApp: { type: String, required: true },
  submitEmail: { type: String, required: true },
  successMessage: { type: String, required: true },
  gateways: { type: Object, required: true },
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
const errors = reactive({})
const sent = ref(false)
const loading = ref(false)

async function onSubmit(channel) {
  Object.keys(errors).forEach((key) => delete errors[key])
  const result = validateLead(form)
  if (!result.ok) {
    Object.assign(errors, result.errors)
    return
  }

  loading.value = true
  try {
    await props.gateways[channel].submit({ ...form })
    sent.value = true
  } finally {
    loading.value = false
  }
}
</script>
