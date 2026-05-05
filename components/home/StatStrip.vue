<script setup lang="ts">
const stats = [
  { num: '6+', label: 'Aktive Projekte' },
  { num: '∞', label: 'Ehrgeiz' },
  { num: '1', label: 'Kernteam' },
  { num: '0', label: 'Unnötige Admins' }
]
</script>

<template>
  <div class="relative z-10 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="(s, i) in stats"
      :key="s.label"
      class="flex flex-col gap-2 border-border px-5 py-6 sm:px-8 lg:px-12"
      :class="[
        i < stats.length - 1 ? 'lg:border-r' : '',
        i % 2 === 0 ? 'sm:border-r lg:border-r' : '',
        i < 2 ? 'border-b lg:border-b-0' : ''
      ]"
    >
      <span class="font-head text-[2rem] font-bold leading-none sm:text-[2.2rem]">{{ s.num }}</span>
      <span class="font-mono text-[0.82rem] uppercase leading-[1.35] tracking-[0.1em] text-ink-mid">{{ s.label }}</span>
    </div>
  </div>
</template>
