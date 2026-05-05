<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface Star {
  x: number
  y: number
  size: number
  lo: number
  hi: number
  dur: number
  del: number
}

const stars = ref<Star[]>([])

onMounted(() => {
  stars.value = Array.from({ length: 80 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    lo: Number((Math.random() * 0.15).toFixed(2)),
    hi: Number((Math.random() * 0.5 + 0.2).toFixed(2)),
    dur: Number((Math.random() * 4 + 2).toFixed(1)),
    del: Number((Math.random() * 5).toFixed(1))
  }))
})
</script>

<template>
  <section class="relative grid min-h-screen items-center gap-16 overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:px-12">
    <ClientOnly>
      <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          v-for="(s, i) in stars"
          :key="i"
          class="absolute rounded-full bg-purple-pale"
          :style="{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.dur}s ${s.del}s infinite`,
            '--lo': s.lo,
            '--hi': s.hi
          }"
        />
      </div>
    </ClientOnly>

    <div v-reveal class="relative z-10">
      <SectionLabel>v0.1 — Early Access</SectionLabel>

      <h1 class="mb-8 font-head text-[3.5rem] font-extrabold leading-[0.92] sm:text-[5rem] lg:text-[6.5rem]">
        Illunium
        <span class="block font-mono text-[0.45em] font-normal uppercase leading-[2.5] tracking-[0.15em] text-ink-mid">
          Community · Tools · Universum
        </span>
      </h1>

      <p class="mb-12 max-w-[38ch] text-[1.05rem] leading-[1.75] text-ink-mid">
        Eine wachsende Community von Developern und Gamern. Wenig Hierarchie,
        viel Automatisierung — und eigene Projekte, die das Zusammenarbeiten neu denken.
      </p>

      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <NuxtLink to="/community" class="btn-primary">Community joinen</NuxtLink>
        <NuxtLink to="/projekte" class="btn-ghost">Alle Projekte →</NuxtLink>
      </div>
    </div>

    <div class="relative z-10 flex items-center justify-center pt-4 lg:pt-16">
      <div class="absolute h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(151,71,255,0.15)_0%,transparent_70%)] sm:h-[340px] sm:w-[340px]" />
      <IlluniumLogo :size="280" class="relative z-10 text-purple spin-slow max-w-[70vw]" />
    </div>
  </section>
</template>

<style scoped>
.btn-primary {
  @apply rounded-[2px] bg-purple px-8 py-3 text-center font-mono text-tag uppercase tracking-[0.08em] text-white no-underline transition-all duration-200 hover:-translate-y-px hover:opacity-85;
}

.btn-ghost {
  @apply font-mono text-tag uppercase tracking-[0.08em] text-ink-mid no-underline transition-colors hover:text-ink;
}
</style>
