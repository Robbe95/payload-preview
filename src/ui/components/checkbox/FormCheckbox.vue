<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { Switch } from '@headlessui/vue'
import { useCheckboxContext } from '@/ui/composables/checkbox/useCheckboxContext'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  value?: any
  isDisabled?: boolean
}>(), {
  modelValue: false,
  value: null,
  isDisabled: false,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): () => void
}>()

const slots = useSlots()

const context = useCheckboxContext()

const model = computed({
  get: () => props.modelValue,
  set: (value: boolean) => {
    emit('update:modelValue', value)
  },
})

const isSelected = computed(() => {
  if (!context)
    return model.value
  else
    return !!context.selectedValue.value?.some((singleValue: any) => context.compareFunction(singleValue, props.value))
})

function handleClick(): void {
  if (context)
    context.handleItemClicked(props.value)
}
</script>

<template>
  <Switch
    id="switch"
    v-model="model"
    :value="value"
    class="flex items-center gap-2"
    @click="handleClick"
  >
    <div
      class="rounded border border-primary p-2 transition-colors"
      :class="{
        'bg-white': isSelected,
        'bg-primary/10': !isSelected,
      }"
    >
      <CheckmarkIcon
        class="h-3 w-3 transition-opacity"
        :class="{
          'text-primary': isSelected,
          'opacity-0': !isSelected,
        }"
      />
    </div>

    <label for="switch">
      <template v-if="!slots.default && context && context.hasLabels">
        <span class="text-black">{{ context?.displayFunction.value(value) }}</span>
      </template>
      <slot />

    </label>
  </Switch>
</template>
