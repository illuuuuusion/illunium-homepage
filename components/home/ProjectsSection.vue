<script setup lang="ts">
type ProjectStatus = 'active' | 'building' | 'planned' | 'ondemand'

const projects: Array<{
  num: string
  name: string
  desc: string
  tag: string
  status: ProjectStatus
  to: string
}> = [
  { num: '01', name: 'Illunium Notes', desc: 'Die Notizen-App — Notion trifft Obsidian, privacy-first.', tag: 'App', status: 'building', to: '/notes' },
  { num: '02', name: 'Discord Bot', desc: 'Serverautomatisierung, Moderation, Community-Tools.', tag: 'Bot', status: 'building', to: '/projekte' },
  { num: '03', name: 'Webhosting', desc: 'Self-hosted Webserver-Infrastruktur für Community-Projekte.', tag: 'Infra', status: 'active', to: '/projekte' },
  { num: '04', name: 'Minecraft Server', desc: 'Custom-Server mit Events und Community-Features.', tag: 'Gaming', status: 'ondemand', to: '/projekte' },
  { num: '05', name: 'Hytale Projekt', desc: 'Ein langfristiges Projekt rund um Hytales Release.', tag: 'Gaming', status: 'planned', to: '/projekte' },
  { num: '06', name: 'Diese Website', desc: 'Community-Hub, Projektstatus, Dokumentation.', tag: 'Web', status: 'building', to: '/projekte' }
]
</script>

<template>
  <section id="projekte" class="relative z-10 border-t border-border py-24 lg:py-32">
    <div class="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
      <div class="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel v-reveal>Projekte</SectionLabel>
          <h2 v-reveal class="font-head text-[2rem] font-bold leading-[1.05] sm:text-[3.2rem]">
            Was gebaut wird.
          </h2>
        </div>
        <span v-reveal class="font-mono text-tag text-ink-dim">{{ projects.length }} Projekte</span>
      </div>

      <NuxtLink
        v-for="(p, i) in projects"
        :key="p.num"
        v-reveal
        :to="p.to"
        class="project-row"
        :class="`reveal-d${(i % 3) + 1}`"
      >
        <span class="proj-num font-mono text-tag text-ink-dim">{{ p.num }}</span>
        <div>
          <p class="proj-name mb-1 font-head text-[1.1rem] font-semibold transition-colors duration-200">{{ p.name }}</p>
          <p class="text-[0.88rem] text-ink-mid">{{ p.desc }}</p>
        </div>
        <span class="w-fit whitespace-nowrap rounded-[1px] border border-border px-3 py-1.5 font-mono text-tag uppercase tracking-[0.1em] text-ink-dim">
          {{ p.tag }}
        </span>
        <StatusDot :status="p.status" />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.project-row {
  @apply grid gap-5 border-b border-border py-8 text-inherit no-underline transition-colors duration-200 first:border-t sm:items-center lg:gap-8;
  grid-template-columns: 1fr;
}

@screen sm {
  .project-row {
    grid-template-columns: 4rem 1fr auto;
  }
}

@screen lg {
  .project-row {
    grid-template-columns: 4rem 1fr auto auto;
  }
}

.project-row:hover {
  @apply border-border-sharp;
}

.project-row:hover .proj-num {
  @apply text-purple;
}

.project-row:hover .proj-name {
  @apply text-purple-pale;
}
</style>
