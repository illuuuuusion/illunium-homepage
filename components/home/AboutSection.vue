<script setup lang="ts">
const pillars = [
  {
    num: '01',
    title: 'Developer Community',
    text: 'Ein Ort für Menschen, die Dinge bauen. Coding-Projekte, Tools, Automatisierungen — geteilt und weiterentwickelt.'
  },
  {
    num: '02',
    title: 'Gaming Universe',
    text: 'Minecraft, Hytale und mehr — on demand, für Events, zum Ausprobieren. Keine dauerhaften Server-Kosten für ungenutzte Features.'
  },
  {
    num: '03',
    title: 'Privatsphäre als Fundament',
    text: 'Alle Illunium-Projekte sind privacy-first. Deine Daten gehören dir — nicht einem Dienst, der sie monetarisiert.'
  }
]
</script>

<template>
  <section class="relative z-10 py-28 lg:py-48">
    <div class="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
      <SectionLabel v-reveal>Was ist Illunium</SectionLabel>

      <div class="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div v-reveal>
          <h2 class="mb-8 font-head text-[1.8rem] font-bold leading-[1.1] sm:text-[2.5rem]">
            Weniger Struktur.<br />Mehr Substanz.
          </h2>
          <p class="mb-6 leading-[1.8] text-ink-mid">
            Illunium ist kein gewöhnlicher Server. Es ist ein Experiment: Was passiert, wenn eine kleine
            Gruppe Menschen echte Projekte baut — ohne Corporate-Overhead, ohne aufgeblähte Hierarchien?
          </p>
          <p class="leading-[1.8] text-ink-mid">
            Hinter allem steckt eine Person (Jamie) mit einer klaren Vision: Automatisierung dort,
            wo Automatisierung möglich ist. Energie für das, was wirklich zählt.
          </p>
        </div>

        <div class="flex flex-col">
          <div
            v-for="(p, i) in pillars"
            :key="p.num"
            v-reveal
            class="grid grid-cols-[3rem_1fr] items-start gap-6 border-b border-border py-8 first:border-t"
            :class="`reveal-d${i + 1}`"
          >
            <span class="pt-1 font-mono text-tag text-purple">{{ p.num }}</span>
            <div>
              <p class="mb-2 font-head text-[1rem] font-semibold text-ink">{{ p.title }}</p>
              <p class="text-[0.9rem] leading-[1.7] text-ink-mid">{{ p.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
