<script setup lang="ts">

</script>

<template>
  <Story
    title="App/Tooltip/AppTooltip"
  >
    <Variant title="Default">
      <div class="flex w-full items-center justify-center gap-1">
        <AppTooltip>
          <template #element>
            <AppButton>Bottom</AppButton>
          </template>
          <template #tooltip>
            <div class="rounded bg-white p-2 shadow">
              <p class="text-subtext text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic veritatis dignissimos mollitia, recusandae, pariatur totam praesentium animi voluptatem explicabo voluptatibus inventore illum eveniet amet ex. Sapiente dignissimos quas quos aut.
              </p>
            </div>
          </template>
        </AppTooltip>
      </div>
    </Variant>
    <Variant title="Left">
      <div class="flex h-full w-full items-center justify-center gap-1">
        <AppTooltip placement="left">
          <template #element="{ events }">
            <AppButton v-bind="events">
              Left
            </AppButton>
          </template>
          <template #tooltip>
            <div class="rounded bg-white p-2 shadow">
              <p class="text-subtext text-muted">
                Left
              </p>
            </div>
          </template>
        </AppTooltip>
      </div>
    </Variant>
  </Story>
</template>
