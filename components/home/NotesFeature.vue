<script setup lang="ts">
const points = [
  { label: 'Local-first & verschlüsselt', text: 'Deine Notizen verlassen dein Gerät nur, wenn du es willst. Kein Abo-Modell, kein Vendor Lock-in.' },
  { label: 'Notion-kompatibles UI', text: 'Datenbanken, verlinkte Seiten, Kanban-Boards — alles out-of-the-box, keine Plugins vorab nötig.' },
  { label: 'Standard-Formate', text: 'Markdown, JSON, Export zu gängigen Formaten. Keine proprietären Strukturen, die dich einschließen.' },
  { label: 'Performance-first', text: '10.000 Notizen laden genauso schnell wie zehn — gebaut mit diesem Anspruch von Anfang an.' }
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
          Notion ist mächtig, aber deine Daten leben auf fremden Servern. Obsidian ist privat,
          aber der Start ist rau. Illunium Notes baut eine dritte Option: lokal-first,
          out-of-the-box kompatibel, schnell.
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
