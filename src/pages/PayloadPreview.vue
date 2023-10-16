<script setup lang="ts">
import type { Reference } from '@/types/references.type'
import { getReference } from '@/api/reference.api'

const reference = ref<Reference | null>(null)

async function getData(): Promise<void> {
  const data = await getReference()
  reference.value = data
}

getData()
</script>

<template>
  <div>
    <PayloadReferencePreview v-if="reference" :reference="reference" />
  </div>
</template>
