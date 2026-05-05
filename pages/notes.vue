<script setup lang="ts">
const pillars = [
  { num: '01', title: 'Tauri 2 + Rust', text: 'Performance, kleines Bundle und nativer Zugriff auf Dateisystem und Keychain statt schwerer Electron-Schicht.' },
  { num: '02', title: 'React + TypeScript', text: 'Vite, Tailwind CSS und shadcn/ui bilden den etablierten Frontend-Stack für den Desktop-MVP.' },
  { num: '03', title: 'BlockNote + JSON', text: 'Notion-ähnliches /-Menü, eigene Block-Typen und strukturiertes JSON mit Markdown-Import und -Export.' },
  { num: '04', title: 'SQLite Storage', text: 'Lokale Datenhaltung über tauri-plugin-sql, vorbereitet für schnelle Suche und robuste Offline-Nutzung.' },
  { num: '05', title: 'Rust Encryption', text: 'Verschlüsselung im Rust-Layer mit age oder AES-256-GCM, Schlüssel sicher im nativen Keychain.' },
  { num: '06', title: 'Git-Sync zuerst', text: 'Phase 1 speichert Snapshots als JSON in privaten GitHub/GitLab-Repos, später Supabase oder PocketBase.' }
]

</script>

<template>
  <div class="pt-28">
    <section class="relative z-10 px-5 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div v-reveal>
          <SectionLabel>Illunium Notes</SectionLabel>
          <h1 class="mb-6 font-head text-[2.5rem] font-extrabold leading-[1] sm:text-[4.5rem]">
            Notizen ohne fremdes Fundament.
          </h1>
          <p class="mb-8 leading-[1.8] text-ink-mid">
            Illunium Notes ist ein kleiner MVP für eine lokale, verschlüsselte Desktop-Notizen-App:
            Tauri 2 im Backend, React und TypeScript im Frontend, BlockNote als Editor und SQLite als Speicher.
          </p>
          <NuxtLink to="/community" class="inline-block rounded-[2px] bg-purple px-8 py-3 font-mono text-tag uppercase tracking-[0.08em] text-white no-underline transition-all hover:-translate-y-px hover:opacity-90">
            Auf dem Laufenden bleiben
          </NuxtLink>
        </div>

        <NotesEditorMockup v-reveal large class="reveal-d1" />
      </div>
    </section>

    <section class="relative z-10 border-t border-border bg-void-2 px-5 py-24 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[1200px]">
        <SectionLabel v-reveal>Stack-Entscheidung</SectionLabel>
        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="pillar in pillars"
            :key="pillar.num"
            v-reveal
            class="border border-border bg-void p-8 transition-colors hover:border-border-sharp"
          >
            <p class="mb-6 font-mono text-tag text-purple">{{ pillar.num }}</p>
            <h2 class="mb-3 font-head text-[1.1rem] font-semibold">{{ pillar.title }}</h2>
            <p class="text-[0.9rem] leading-[1.75] text-ink-mid">{{ pillar.text }}</p>
          </article>
        </div>
      </div>
    </section>

  </div>
</template>
