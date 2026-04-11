<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isScrolled = ref(false)

function setLocale(lang) {
  locale.value = lang.toLowerCase()
  localStorage.setItem('locale', lang.toLowerCase())
}

function handleScroll() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <a href="#" class="header__logo" aria-label="Calo Lab — inicio">CALO LAB</a>

    <nav class="header__langs" role="group" :aria-label="t('aria.lang_selector')">
      <button
        class="lang-btn"
        :class="{ 'lang-btn--active': locale === 'es' }"
        @click="setLocale('es')"
        :aria-pressed="locale === 'es'"
      >ES</button>
      <span class="lang-sep" aria-hidden="true">|</span>
      <button
        class="lang-btn"
        :class="{ 'lang-btn--active': locale === 'pt' }"
        @click="setLocale('pt')"
        :aria-pressed="locale === 'pt'"
      >PT</button>
      <span class="lang-sep" aria-hidden="true">|</span>
      <button
        class="lang-btn"
        :class="{ 'lang-btn--active': locale === 'en' }"
        @click="setLocale('en')"
        :aria-pressed="locale === 'en'"
      >EN</button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  background: transparent;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}

.header--scrolled {
  background: var(--color-nav-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.header__logo {
  font-family: var(--font-heading);
  font-size: 24px;
  letter-spacing: 0.08em;
  color: #f2ede6;
  line-height: 1;
  transition: opacity 0.2s ease;
}

.header--scrolled .header__logo {
  color: var(--color-text-primary);
}

.header__logo:hover {
  opacity: 0.75;
}

.header__langs {
  display: flex;
  align-items: center;
  gap: 6px;
}

.lang-btn {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(242, 237, 230, 0.85);
  cursor: pointer;
  padding: 2px 0;
  transition: color 0.2s ease;
  line-height: 1;
}

.header--scrolled .lang-btn {
  color: var(--color-text-primary);
}

.lang-btn--active {
  color: var(--color-accent) !important;
}

.lang-btn:hover:not(.lang-btn--active) {
  color: #ffffff;
}

.header--scrolled .lang-btn:hover:not(.lang-btn--active) {
  color: var(--color-accent);
}

.lang-sep {
  font-size: 11px;
  color: rgba(242, 237, 230, 0.4);
  line-height: 1;
  user-select: none;
}

.header--scrolled .lang-sep {
  color: var(--color-border);
}

@media (max-width: 768px) {
  .header {
    padding: 20px 24px;
  }

  .header__logo {
    font-size: 20px;
  }
}
</style>
