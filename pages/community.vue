<script setup lang="ts">
const team = [
  { name: 'Jamie', role: 'Founder / Builder', text: 'Baut Website, Tools, Automatisierung und die langfristige Richtung von Illunium.' },
  { name: 'DontMindMe', role: 'Community Support', text: 'Hilft dort, wo menschlicher Kontext mehr zählt als Automatisierung <3.' }
]

const values = [
  { title: 'Privacy', text: 'Daten sollen bewusst behandelt werden, nicht beiläufig eingesammelt.' },
  { title: 'Flat', text: 'Wenig Hierarchie, klare Rollen und Beiträge, die für sich sprechen.' },
  { title: 'Automate', text: 'Wiederholbare Aufgaben gehören in Bots, nicht in endlose Admin-Arbeit.' }
]
</script>

<template>
  <div class="pt-28">
    <section class="relative z-10 px-5 py-20 text-center sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[760px]">
        <IlluniumLogo v-reveal :size="90" class="mx-auto mb-8 text-purple" />
        <SectionLabel v-reveal class="justify-center">Community</SectionLabel>
        <h1 v-reveal class="mb-6 font-head text-[2.5rem] font-extrabold leading-[1] sm:text-[4.5rem]">
          Klein, technisch, bewusst.
        </h1>
        <p v-reveal class="mx-auto max-w-[62ch] leading-[1.8] text-ink-mid">
          Illunium ist ein Ort für Developer, Gamer und Menschen, die lieber bauen als verwalten.
          Discord ist der Treffpunkt, Projekte sind der Grund zu bleiben.
        </p>
        <a
          v-reveal
          href="https://discord.gg/INVITE_LINK"
          target="_blank"
          rel="noopener"
          class="mt-10 inline-flex items-center gap-3 rounded-[2px] bg-[#5865F2] px-9 py-4 font-mono text-tag uppercase tracking-[0.08em] text-white no-underline transition-all hover:-translate-y-px hover:opacity-90"
        >
          Zum Discord Server
        </a>
      </div>
    </section>

    <section class="relative z-10 border-t border-border bg-void-2 px-5 py-24 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[1200px]">
        <SectionLabel v-reveal>Team</SectionLabel>
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <article v-for="person in team" :key="person.name" v-reveal class="border border-border bg-void p-8">
            <h2 class="mb-2 font-head text-[1.4rem] font-semibold">{{ person.name }}</h2>
            <p class="mb-5 font-mono text-tag uppercase tracking-[0.12em] text-purple">{{ person.role }}</p>
            <p class="leading-[1.75] text-ink-mid">{{ person.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="relative z-10 border-t border-border px-5 py-24 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[1200px]">
        <SectionLabel v-reveal>Werte</SectionLabel>
        <div class="mt-12 grid border border-border md:grid-cols-3">
          <article
            v-for="(value, i) in values"
            :key="value.title"
            v-reveal
            class="border-border p-8 md:p-10"
            :class="i < values.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''"
          >
            <h2 class="mb-4 font-head text-[1.15rem] font-semibold">{{ value.title }}</h2>
            <p class="text-[0.9rem] leading-[1.75] text-ink-mid">{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
