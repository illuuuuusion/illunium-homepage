<template>
  <footer class="relative z-10 border-t border-border px-5 py-6 sm:px-8 lg:px-12">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div class="flex flex-wrap items-center gap-3">
        <IlluniumLogo :size="22" class="text-purple" />
        <span class="font-head font-bold tracking-[0.08em]">Illunium</span>
        <span class="font-mono text-tag text-ink-dim">Hobby project by Jamie · 2025</span>
      </div>
      <div class="flex flex-wrap gap-6 lg:gap-8">
        <a href="https://discord.gg/INVITE_LINK" target="_blank" rel="noopener" class="footer-link">Discord</a>
        <a href="#" class="footer-link">GitHub</a>
        <a href="#" class="footer-link">Status</a>
        <NuxtLink to="/datenschutz" class="footer-link">Datenschutz</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply font-mono text-tag uppercase tracking-[0.08em] text-ink-dim no-underline transition-colors hover:text-purple-pale;
}
</style>
