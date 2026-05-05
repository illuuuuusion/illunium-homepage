<script setup lang="ts">
import logoUrl from '~/assets/images/logo.svg'

defineProps<{ size?: number }>()
</script>

<template>
  <img
    :src="logoUrl"
    :width="size ?? 200"
    :height="size ?? 200"
    class="inline-block object-contain"
    alt=""
    aria-hidden="true"
  >
</template>
