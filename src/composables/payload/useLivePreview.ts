import { ready, subscribe, unsubscribe } from '@payloadcms/live-preview'
import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

export function useLivePreview<T>(props: {
  depth?: number
  initialData: T
  serverURL: string
}): {
    data: Ref<T>
    isLoading: Ref<boolean>
  } {
  const data = ref(props.initialData) as Ref<T>
  const isLoading = ref(true)
  const hasSentReadyMessage = ref(false)
  const subscription = ref<any>(null)
  const onChange = (mergedData: T): void => {
    console.log('onChange', mergedData)
    data.value = mergedData as T
    isLoading.value = false
  }

  onMounted(() => {
    subscription.value = subscribe({
      callback: mergedData => onChange(mergedData),
      depth: props.depth ?? 2,
      initialData: props.initialData,
      serverURL: props.serverURL,
    })

    if (!hasSentReadyMessage.value) {
      hasSentReadyMessage.value = true

      ready({
        serverURL: props.serverURL,
      })
      console.log(subscription.value)
    }
  })

  onUnmounted(() => {
    unsubscribe(subscription)
  })

  return {
    data,
    isLoading,
  }
}
