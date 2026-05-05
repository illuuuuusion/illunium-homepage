<script setup lang="ts">
const points = [
  { label: 'Tauri 2 statt Electron', text: 'Rust-Backend, kleines Bundle und nativer Zugriff auf Dateisystem und Keychain.' },
  { label: 'React + TypeScript', text: 'Vite, Tailwind CSS und shadcn/ui bilden den Frontend-Stack für einen sauberen MVP.' },
  { label: 'BlockNote Editor', text: 'Notion-typisches /-Menü, eigene Block-Typen und strukturiertes JSON statt reinem Markdown.' },
  { label: 'SQLite + Verschlüsselung', text: 'Lokale Speicherung via tauri-plugin-sql, Schlüssel im nativen Keychain, Verschlüsselung im Rust-Layer.' }
]
</script>

<template>
  <section id="notes" class="relative z-10 border-t border-border bg-void-2 py-24 lg:py-32">
    <div class="mx-auto grid max-w-[1200px] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
      <div v-reveal>
        <div class="mb-8 inline-flex items-center gap-2 rounded-[1px] border border-border-sharp px-3 py-1.5 font-mono text-tag uppercase tracking-[0.15em] text-purple">
          <span class="h-1.5 w-1.5 rounded-full bg-purple" />
          Neues Projekt
        </div>
        <h2 class="mb-6 font-head text-[2rem] font-extrabold leading-[1.05] sm:text-[2.8rem]">
          Notes — denken wie du willst, sicher wie du brauchst.
        </h2>
        <p class="mb-10 leading-[1.8] text-ink-mid">
          Illunium Notes startet als kleiner Desktop-MVP. Der Fokus liegt auf lokalem Arbeiten,
          nativer Sicherheit und einem Editor, der sich wie moderne Workspace-Tools anfühlt,
          ohne ein schweres Electron-Bundle mitzuschleppen.
        </p>
        <div class="flex flex-col gap-5">
          <div v-for="p in points" :key="p.label" class="flex items-start gap-4">
            <span class="w-6 flex-shrink-0 pt-1 font-mono text-tag text-purple">→</span>
            <p class="text-[0.92rem] leading-[1.65] text-ink-mid">
              <strong class="font-medium text-ink">{{ p.label }}</strong> — {{ p.text }}
            </p>
          </div>
        </div>
        <NuxtLink to="/notes" class="mt-10 inline-block border-b border-purple pb-0.5 font-mono text-tag uppercase tracking-[0.1em] text-purple no-underline transition-colors hover:border-purple-pale hover:text-purple-pale">
          Mehr über Illunium Notes →
        </NuxtLink>
      </div>

      <NotesEditorMockup v-reveal class="reveal-d2" />
    </div>
  </section>
</template>
