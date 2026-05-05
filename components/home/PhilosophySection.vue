<script setup lang="ts">
const cards = [
  { num: '01 / Automate', title: 'Automatisierung vor Moderation', text: 'Jede Task, die ein Bot übernehmen kann, sollte kein Mensch erledigen. Freie Zeit gehört echten Projekten.' },
  { num: '02 / Flat', title: 'Flache Strukturen, klare Rollen', text: 'Wenig Admins, wenig Mods — aber jeder weiß, wofür er steht. Keine Titel, nur Beiträge.' },
  { num: '03 / Private', title: 'Privacy ist kein Feature', text: 'Privacy-first ist kein Verkaufsargument bei Illunium. Es ist eine Überzeugung, die jedes Projekt prägt.' }
]
</script>

<template>
  <section class="relative z-10 border-t border-border py-24 lg:py-32">
    <div class="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
      <SectionLabel v-reveal>Grundsätze</SectionLabel>
      <h2 v-reveal class="mb-16 font-head text-[2rem] font-bold sm:text-[3.2rem]">
        Das Illunium-Prinzip.
      </h2>
      <div v-reveal class="grid border border-border md:grid-cols-3">
        <div
          v-for="(c, i) in cards"
          :key="c.num"
          class="phil-card relative overflow-hidden border-border p-8 md:p-10"
          :class="i < cards.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''"
        >
          <div class="phil-line absolute left-0 top-0 h-[2px] w-0 bg-purple transition-all duration-500" />
          <p class="mb-6 font-mono text-tag tracking-[0.15em] text-ink-dim">{{ c.num }}</p>
          <p class="mb-4 font-head text-[1.1rem] font-bold leading-[1.25]">{{ c.title }}</p>
          <p class="text-[0.88rem] leading-[1.75] text-ink-mid">{{ c.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.phil-card:hover .phil-line {
  @apply w-full;
}
</style>
