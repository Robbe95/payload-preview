<script setup lang="ts">
import type { SnackbarLocation } from '@/ui/composables/snackbar/useSnackbar'
import { useSnackbar } from '@/ui/composables/snackbar/useSnackbar'

const { addSnackbar } = useSnackbar()

function handleClick(type: 'success' | 'error' | 'warning' | 'info', position: SnackbarLocation): void {
  addSnackbar({
    message: 'lorem ipsum',
    type,
    position,
  })
}
</script>

<template>
  <Story
    title="App/Snackbars/AppSnackbar"
  >
    <Variant title="Default">
      <div class="flex gap-1">
        <AppButton @component:click="handleClick('info', 'bottom-right')">
          Add info snackbar
        </AppButton>
        <AppButton @component:click="handleClick('success', 'top-right')">
          Add success snackbar
        </AppButton>
        <AppButton @component:click="handleClick('warning', 'top-left')">
          Add warning snackbar
        </AppButton>
        <AppButton @component:click="handleClick('error', 'bottom-left')">
          Add error snackbar
        </AppButton>
      </div>
    </Variant>
  </Story>
</template>
