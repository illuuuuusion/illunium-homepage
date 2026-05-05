<script setup lang="ts">
import { computed, ref } from 'vue'

type Tag = 'Alle' | 'Gaming' | 'App' | 'Infra' | 'Bot' | 'Web'
type ProjectStatus = 'active' | 'building' | 'planned' | 'ondemand'

const selectedTag = ref<Tag>('Alle')

const filters: Tag[] = ['Alle', 'Gaming', 'App', 'Infra', 'Bot', 'Web']

const projects: Array<{
  num: string
  name: string
  tag: Exclude<Tag, 'Alle'>
  status: ProjectStatus
  desc: string
}> = [
  { num: '01', name: 'Illunium Notes', tag: 'App', status: 'building', desc: 'Privacy-first Notizen-App mit lokalem Speicher, vertrauten Editor-Mustern und optionalem Sync.' },
  { num: '02', name: 'Discord Bot', tag: 'Bot', status: 'building', desc: 'Automatisierung für Rollen, Events, Moderation und kleine Community-Workflows.' },
  { num: '03', name: 'Webhosting', tag: 'Infra', status: 'active', desc: 'Self-hosted Infrastruktur für Projektseiten, Experimente und interne Tools.' },
  { num: '04', name: 'Minecraft Server', tag: 'Gaming', status: 'ondemand', desc: 'Custom-Server für Events und Tests, bewusst nicht permanent online.' },
  { num: '05', name: 'Hytale Projekt', tag: 'Gaming', status: 'planned', desc: 'Langfristiges Spielprojekt für die Zeit nach dem Release.' },
  { num: '06', name: 'Diese Website', tag: 'Web', status: 'building', desc: 'Community-Hub, Projektstatus und kompakte Übersicht über das Illunium-Universum.' }
]

const roadmap = [
  { when: 'Q2 2026', title: 'Website MVP', text: 'Statische Pages, Projektübersicht, Notes-Feature und Community-CTA veröffentlichen.' },
  { when: 'Q3 2026', title: 'Bot-Fundament', text: 'Discord-Automation für Rollen, Events und wiederkehrende Server-Aufgaben stabilisieren.' },
  { when: 'Q4 2026', title: 'Notes Prototype', text: 'Editor, lokale Verschlüsselung und erste Import-/Export-Strecken testen.' },
  { when: '2027', title: 'Gaming Layer', text: 'Minecraft-Events und Hytale-Vorbereitung als on-demand Community-Angebote ausbauen.' }
]

const filteredProjects = computed(() => {
  if (selectedTag.value === 'Alle') {
    return projects
  }

  return projects.filter((project) => project.tag === selectedTag.value)
})
</script>

<template>
  <div class="pt-28">
    <section class="relative z-10 border-b border-border px-5 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div v-reveal>
          <SectionLabel>Projektübersicht</SectionLabel>
          <h1 class="mb-6 font-head text-[2.5rem] font-extrabold leading-[1] sm:text-[4.5rem]">
            Was gerade entsteht.
          </h1>
          <p class="max-w-[58ch] leading-[1.8] text-ink-mid">
            Illunium wächst über kleine, klar abgegrenzte Projekte: Apps, Infrastruktur,
            Gaming-Ideen und Automatisierung, die echte Arbeit aus dem Weg räumt.
          </p>
        </div>
        <div v-reveal class="reveal-d1 border border-border bg-void-2 p-6">
          <p class="mb-2 font-mono text-tag uppercase tracking-[0.14em] text-purple">Status</p>
          <p class="text-[0.95rem] leading-[1.7] text-ink-mid">
            Kein dynamisches Routing, keine Slugs, kein Content-System. Diese Seite liest ihre Daten direkt aus Vue SFC State.
          </p>
        </div>
      </div>
    </section>

    <section class="relative z-10 px-5 py-16 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[1200px]">
        <div v-reveal class="mb-10 flex flex-wrap gap-3">
          <button
            v-for="filter in filters"
            :key="filter"
            class="rounded-[2px] border px-4 py-2 font-mono text-tag uppercase tracking-[0.1em] transition-colors"
            :class="selectedTag === filter ? 'border-purple bg-purple text-white' : 'border-border text-ink-dim hover:border-border-sharp hover:text-ink'"
            type="button"
            @click="selectedTag = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="grid gap-4">
          <article
            v-for="project in filteredProjects"
            :key="project.num"
            v-reveal
            class="grid gap-5 border border-border bg-void-2 p-6 transition-colors hover:border-border-sharp lg:grid-cols-[4rem_1fr_auto_auto] lg:items-center"
          >
            <span class="font-mono text-tag text-purple">{{ project.num }}</span>
            <div>
              <h2 class="mb-2 font-head text-[1.25rem] font-semibold">{{ project.name }}</h2>
              <p class="text-[0.92rem] leading-[1.7] text-ink-mid">{{ project.desc }}</p>
            </div>
            <span class="w-fit rounded-[1px] border border-border px-3 py-1.5 font-mono text-tag uppercase tracking-[0.1em] text-ink-dim">
              {{ project.tag }}
            </span>
            <StatusDot :status="project.status" />
          </article>
        </div>
      </div>
    </section>

    <section class="relative z-10 border-t border-border bg-void-2 px-5 py-24 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[900px]">
        <SectionLabel v-reveal>Roadmap</SectionLabel>
        <div class="mt-12">
          <div
            v-for="item in roadmap"
            :key="item.when"
            v-reveal
            class="grid gap-4 border-l border-border pb-12 pl-6 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-10 md:border-l-0 md:pl-0"
          >
            <p class="font-mono text-tag uppercase tracking-[0.12em] text-purple">{{ item.when }}</p>
            <div class="border-b border-border pb-8">
              <h2 class="mb-2 font-head text-[1.2rem] font-semibold">{{ item.title }}</h2>
              <p class="leading-[1.75] text-ink-mid">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
