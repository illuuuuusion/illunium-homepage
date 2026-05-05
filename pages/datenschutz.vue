<template>
  <div class="pt-28">
    <section class="relative z-10 px-5 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-[850px]">
        <SectionLabel v-reveal>Datenschutz</SectionLabel>
        <h1 v-reveal class="mb-6 font-head text-[2.5rem] font-extrabold leading-[1] sm:text-[4rem]">
          Privacy-first, auch hier.
        </h1>
        <p v-reveal class="mb-10 leading-[1.8] text-ink-mid">
          Diese statische MVP-Seite setzt bewusst auf wenig Komplexität. Es gibt kein Nuxt Content,
          keine dynamischen Slugs und keine eingebetteten Analyse-Tools im Projektcode.
        </p>

        <div class="grid gap-5">
          <article v-reveal class="border border-border bg-void-2 p-6">
            <h2 class="mb-3 font-head text-[1.2rem] font-semibold">Externe Links</h2>
            <p class="leading-[1.75] text-ink-mid">
              Discord- und GitHub-Links führen zu externen Diensten. Dort gelten die Datenschutzregeln
              der jeweiligen Anbieter.
            </p>
          </article>
          <article v-reveal class="border border-border bg-void-2 p-6">
            <h2 class="mb-3 font-head text-[1.2rem] font-semibold">Schriften</h2>
            <p class="leading-[1.75] text-ink-mid">
              Die Website lädt Google Fonts über die im Head hinterlegten Stylesheet-Links.
              Für ein späteres Production-Setup können die Fonts lokal ausgeliefert werden.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
