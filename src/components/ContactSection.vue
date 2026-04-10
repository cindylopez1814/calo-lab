<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { CONTACT } from '../config.js'
import { useReveal } from '../composables/useReveal.js'

const { t } = useI18n()

const container = ref(null)
useReveal(container)

const waUrl = computed(() =>
  CONTACT.waBase + '?text=' + encodeURIComponent(t('contact.wa_message'))
)
</script>

<template>
  <section id="contacto" class="contact-wrap" ref="container">
    <div class="section contact-inner">
      <div class="contact-decoration" aria-hidden="true">
        <div class="contact-shape contact-shape--a"></div>
        <div class="contact-shape contact-shape--b"></div>
      </div>

      <div class="contact-content">
        <h2 class="contact-phrase reveal">{{ t('contact.phrase') }}</h2>

        <a
          :href="waUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary contact-wa-btn reveal reveal-d1"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {{ t('contact.wa_cta') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrap {
  background: var(--color-bg);
  border-top: var(--border-thick) solid var(--color-text-primary);
  position: relative;
  overflow: hidden;
}

.contact-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.contact-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.contact-shape {
  position: absolute;
  border: var(--border-thick) solid var(--color-border);
}

.contact-shape--a {
  width: 200px;
  height: 200px;
  top: -60px;
  right: 5%;
  transform: rotate(15deg);
  opacity: 0.5;
}

.contact-shape--b {
  width: 120px;
  height: 120px;
  bottom: -30px;
  left: 8%;
  background: var(--color-accent);
  opacity: 0.15;
  transform: rotate(-8deg);
}

.contact-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 700px;
}

.contact-phrase {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 4rem);
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 1.05;
}

.contact-wa-btn {
  font-size: 1.3rem;
  padding: 1rem 2.5rem;
  transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.contact-wa-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(217, 95, 43, 0.3);
}
</style>
