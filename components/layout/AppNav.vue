<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const scrolled = ref(false)
const open = ref(false)

const links = [
  { label: 'Projekte', to: '/projekte' },
  { label: 'Notes', to: '/notes' },
  { label: 'Community', to: '/community' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 border-b px-5 py-4 transition-all duration-300 sm:px-8 lg:px-12"
    :class="scrolled || open ? 'border-border bg-void/90 backdrop-blur-md' : 'border-transparent'"
  >
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3 text-purple no-underline" @click="open = false">
        <IlluniumLogo :size="28" />
        <span class="font-head text-[1.1rem] font-bold tracking-[0.08em] text-ink">Illunium</span>
      </NuxtLink>

      <button
        class="flex h-10 w-10 items-center justify-center border border-border text-ink md:hidden"
        type="button"
        :aria-expanded="open"
        aria-label="Navigation umschalten"
        @click="open = !open"
      >
        <span class="sr-only">Navigation</span>
        <span class="relative h-3.5 w-5">
          <span
            class="absolute left-0 top-0 h-px w-full bg-current transition"
            :class="open ? 'translate-y-[7px] rotate-45' : ''"
          />
          <span
            class="absolute left-0 top-[7px] h-px w-full bg-current transition"
            :class="open ? 'opacity-0' : ''"
          />
          <span
            class="absolute bottom-0 left-0 h-px w-full bg-current transition"
            :class="open ? '-translate-y-[7px] -rotate-45' : ''"
          />
        </span>
      </button>

      <ul class="hidden list-none items-center gap-10 md:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" class="nav-link">{{ link.label }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/community" class="discord-link">Discord</NuxtLink>
        </li>
      </ul>
    </div>

    <div v-if="open" class="mt-5 grid gap-2 border-t border-border pt-5 md:hidden">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="mobile-link"
        @click="open = false"
      >
        {{ link.label }}
      </NuxtLink>
      <NuxtLink to="/community" class="discord-link mt-2 text-center" @click="open = false">
        Discord
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply relative font-mono text-tag uppercase tracking-[0.1em] text-ink-mid no-underline transition-colors duration-200 hover:text-ink;
}

.nav-link::after {
  content: '';
  @apply absolute -bottom-0.5 left-0 h-px w-0 bg-purple transition-all duration-200;
}

.nav-link:hover::after,
.router-link-active.nav-link::after {
  @apply w-full;
}

.router-link-active.nav-link {
  @apply text-ink;
}

.discord-link {
  @apply rounded-[2px] border border-border-sharp px-4 py-2 font-mono text-tag uppercase tracking-[0.1em] text-purple no-underline transition-all hover:bg-purple hover:text-white;
}

.mobile-link {
  @apply border border-border px-4 py-4 font-mono text-tag uppercase tracking-[0.1em] text-ink-mid no-underline transition-colors hover:border-border-sharp hover:text-ink;
}
</style>
