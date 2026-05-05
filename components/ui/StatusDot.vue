<script setup lang="ts">
type Status = 'active' | 'building' | 'planned' | 'ondemand'

defineProps<{
  status: Status
}>()

const config: Record<Status, { color: string; label: string; pulse: boolean }> = {
  active: { color: 'bg-green-400', label: 'Live', pulse: false },
  building: { color: 'bg-purple', label: 'In Entwicklung', pulse: true },
  planned: { color: 'bg-ink-dim', label: 'Geplant', pulse: false },
  ondemand: { color: 'bg-ink-dim', label: 'On Demand', pulse: false }
}
</script>

<template>
  <span class="flex items-center gap-2 font-mono text-tag uppercase tracking-[0.1em] text-ink-dim">
    <span
      class="h-[6px] w-[6px] flex-shrink-0 rounded-full"
      :class="[config[status].color, config[status].pulse ? 'dot-pulse' : '']"
    />
    {{ config[status].label }}
  </span>
</template>
