<script setup lang="ts">
defineProps<{
  large?: boolean
}>()

const sidebarItems = [
  { icon: '◆', label: 'Inbox', active: false },
  { icon: '◈', label: 'Projekte', active: false },
  { icon: '▷', label: 'Q1 Planning', active: true },
  { icon: '⊞', label: 'Tasks', active: false },
  { icon: '⊞', label: 'Releases', active: false }
]
</script>

<template>
  <div class="overflow-hidden rounded-[4px] border border-border bg-void font-mono text-[0.82rem]">
    <div class="flex items-center gap-2 border-b border-border bg-void-3 px-4 py-3">
      <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span class="ml-2 min-w-0 truncate text-[0.7rem] tracking-[0.05em] text-ink-dim">
        illunium-notes / Projekte / Q1 Planning.md
      </span>
    </div>

    <div class="grid min-h-[380px] md:grid-cols-[200px_1fr]" :class="large ? 'lg:min-h-[520px]' : ''">
      <div class="hidden border-r border-border py-4 md:block">
        <p class="px-4 py-1 text-[0.6rem] uppercase tracking-[0.15em] text-ink-dim">Workspace</p>
        <div
          v-for="item in sidebarItems"
          :key="item.label"
          class="flex cursor-default items-center gap-2 px-4 py-1.5 text-[0.75rem] text-ink-mid hover:bg-purple-ghost hover:text-ink"
          :class="item.active ? 'border-l-2 border-purple bg-purple-ghost !pl-[calc(1rem-2px)] text-purple-pale' : ''"
        >
          <span class="text-[0.7rem] opacity-60">{{ item.icon }}</span>
          {{ item.label }}
        </div>
      </div>

      <div class="flex flex-col gap-2 p-5 sm:p-6">
        <p class="font-head text-[1.2rem] font-bold text-ink">Q1 Planning — Illunium Notes</p>
        <p class="mb-2 text-[0.65rem] text-ink-dim">Zuletzt bearbeitet: heute · 3 Verlinkungen</p>
        <div class="mb-3 flex flex-wrap gap-2">
          <span
            v-for="tag in ['privacy', 'dev', 'notes-app']"
            :key="tag"
            class="rounded-[1px] border border-border px-2 py-0.5 text-[0.65rem] text-ink-dim"
          >
            {{ tag }}
          </span>
        </div>
        <p class="mt-2 font-semibold text-purple-pale">## MVP Features</p>
        <p class="text-ink-mid">- [ ] Markdown-Editor mit Live-Preview</p>
        <p class="text-ink-mid">
          - [x] Lokale Verschlüsselung via
          <code class="rounded-[2px] bg-purple-ghost px-1 text-purple-pale">AES-256</code>
        </p>
        <p class="text-ink-mid">- [ ] Verlinkungen zwischen Seiten</p>
        <p class="mt-3 font-semibold text-purple-pale">## Nächste Schritte</p>
        <p class="text-ink-mid">
          Sync-Modul planen — P2P via
          <code class="rounded-[2px] bg-purple-ghost px-1 text-purple-pale">WebRTC</code>
          <span class="ml-0.5 inline-block h-[0.9em] w-0.5 animate-[blink_1s_step-end_infinite] align-middle bg-purple" />
        </p>
      </div>
    </div>
  </div>
</template>
