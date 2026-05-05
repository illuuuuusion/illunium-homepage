<script setup lang="ts">
const pillars = [
  { num: '01', title: 'Vue + Local State', text: 'Eine schnelle App-Oberfläche, die sich vertraut anfühlt und offline sinnvoll weiterarbeiten kann.' },
  { num: '02', title: 'AES-256', text: 'Lokale Verschlüsselung steht im Zentrum. Sync ist optional und darf Privacy nicht schwächen.' },
  { num: '03', title: 'Standard-Exports', text: 'Markdown, JSON und portable Formate bleiben Teil der Produktidee, auch wenn die Website selbst keine Markdown-Dateien nutzt.' }
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
            Illunium Notes ist die Idee einer lokalen, verschlüsselten Notizen-App:
            vertraut genug für Notion-Nutzer, frei genug für Menschen, die ihre Daten behalten wollen.
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
        <SectionLabel v-reveal>Feature-Richtung</SectionLabel>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
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

    <section class="relative z-10 border-t border-border px-5 py-24 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[900px] text-center">
        <IlluniumLogo v-reveal :size="72" class="mx-auto mb-8 text-purple" />
        <h2 v-reveal class="mb-5 font-head text-[2rem] font-bold sm:text-[3rem]">
          Privacy-first ist die Produktentscheidung.
        </h2>
        <p v-reveal class="mx-auto max-w-[62ch] leading-[1.8] text-ink-mid">
          Notes soll nicht noch ein Ort werden, an dem private Gedanken als Cloud-Footprint enden.
          Der MVP fokussiert deshalb Editor, lokale Datenhaltung, Verschlüsselung und klare Exportwege.
        </p>
      </div>
    </section>
  </div>
</template>
