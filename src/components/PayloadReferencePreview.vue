<script setup lang="ts">
import { useLivePreview } from '@/composables/payload/useLivePreview'
import type { Reference } from '@/types/references.type'

interface Props {
  reference: Reference
}
const props = defineProps<Props>()

const { data } = useLivePreview<Reference>({
  initialData: props.reference,
  serverURL: import.meta.env.VITE_PAYLOAD_SERVER_URL as string,
  depth: 2,
})
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
