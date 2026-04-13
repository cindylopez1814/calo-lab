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
    <div class="contact-bg" aria-hidden="true">
      <div class="contact-bg__orb contact-bg__orb--1"></div>
      <div class="contact-bg__orb contact-bg__orb--2"></div>
      <div class="contact-bg__orb contact-bg__orb--3"></div>
      <div class="contact-bg__noise"></div>
      <div class="contact-bg__grid"></div>
    </div>

    <div class="section contact-inner">
      <div class="contact-content">
        <p class="contact-eyebrow reveal">{{ t('contact.eyebrow') }}</p>
        <h2 class="contact-phrase reveal reveal-d1">{{ t('contact.phrase') }}</h2>
        <a
          :href="waUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-wa-btn reveal reveal-d2"
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
/* ── Wrapper ─────────────────────────────────────────── */
.contact-wrap {
  position: relative;
  overflow: hidden;
  background: #0a0a0a;
}

/* ── Background layers ───────────────────────────────── */
.contact-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* Orbs animados */
.contact-bg__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  will-change: transform;
}

.contact-bg__orb--1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(217, 95, 43, 0.35) 0%, transparent 70%);
  top: -100px;
  left: -100px;
  animation: orbDrift1 12s ease-in-out infinite alternate;
}

.contact-bg__orb--2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(232, 120, 74, 0.2) 0%, transparent 70%);
  bottom: -80px;
  right: -80px;
  animation: orbDrift2 15s ease-in-out infinite alternate;
}

.contact-bg__orb--3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(242, 237, 230, 0.04) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: orbDrift3 10s ease-in-out infinite alternate;
}

/* Grid sutil */
.contact-bg__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(242, 237, 230, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(242, 237, 230, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Noise */
.contact-bg__noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.035;
  mix-blend-mode: overlay;
}

/* ── Keyframes ───────────────────────────────────────── */
@keyframes orbDrift1 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(60px, 40px) scale(1.15); }
}

@keyframes orbDrift2 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-50px, -60px) scale(1.2); }
}

@keyframes orbDrift3 {
  from { transform: translate(-50%, -50%) scale(0.9); }
  to   { transform: translate(-50%, -50%) scale(1.2); }
}

/* ── Content ─────────────────────────────────────────── */
.contact-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 700px;
}

.contact-eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.contact-phrase {
  font-family: var(--font-heading);
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  text-transform: uppercase;
  color: #f2ede6;
  line-height: 1.0;
}

.contact-wa-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  background: var(--color-accent);
  color: #f2ede6;
  font-family: var(--font-heading);
  font-size: 1.3rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 2px solid rgba(242, 237, 230, 0.2);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}

.contact-wa-btn:hover {
  background: var(--color-accent-hover);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(217, 95, 43, 0.4);
}
</style>
