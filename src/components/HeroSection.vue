<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const waUrl = 'https://wa.me/5548988666796?text=Hola+Cindy,+quiero+hablar+sobre+mi+sitio+web'
</script>

<template>
  <section class="hero">
    <!-- VIDEO: reemplazar este div por <video> cuando esté listo el export de Remotion -->
    <div class="hero__video-placeholder"></div>

    <div class="hero__overlay" aria-hidden="true"></div>

    <div class="hero__content">
      <p class="hero__eyebrow">DISEÑO &amp; DESARROLLO WEB</p>
      <h1 class="hero__tagline">{{ t('hero.tagline') }}</h1>
      <p class="hero__subtagline">{{ t('hero.subtagline') }}</p>
      <a
        :href="waUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hero__cta"
      >{{ t('hero.cta') }}</a>
    </div>

    <span class="hero__scroll" aria-hidden="true">[&nbsp;&nbsp;SCROLL&nbsp;&nbsp;]</span>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

/* ── Fondo ──────────────────────────────────────── */
.hero__video-placeholder {
  position: absolute;
  inset: 0;
  background: #0d0d0d;
  z-index: 0;
}

/* Noise texture */
.hero__video-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}

/* ── Overlay gradiente ───────────────────────────── */
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(13, 13, 13, 0.85) 0%,
    rgba(13, 13, 13, 0.3) 50%,
    rgba(13, 13, 13, 0.1) 100%
  );
  z-index: 1;
}

/* ── Contenido ───────────────────────────────────── */
.hero__content {
  position: relative;
  z-index: 2;
  padding: 0 48px 64px;
  max-width: 800px;
}

.hero__eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 16px;
}

.hero__tagline {
  font-family: var(--font-heading);
  font-size: 96px;
  line-height: 0.95;
  color: #f2ede6;
  max-width: 700px;
  text-transform: uppercase;
}

.hero__subtagline {
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.6;
  color: rgba(242, 237, 230, 0.7);
  margin-top: 16px;
  max-width: 480px;
}

.hero__cta {
  display: inline-block;
  margin-top: 32px;
  padding: 16px 32px;
  background: var(--color-accent);
  color: #f2ede6;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  transition: background 0.2s ease, transform 0.2s ease;
  cursor: pointer;
}

.hero__cta:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
}

/* ── Scroll indicator ────────────────────────────── */
.hero__scroll {
  position: absolute;
  bottom: 32px;
  right: 48px;
  z-index: 2;
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(242, 237, 230, 0.4);
  user-select: none;
}

/* ── Responsive ──────────────────────────────────── */
@media (max-width: 768px) {
  .hero__content {
    padding: 0 24px 48px;
  }

  .hero__tagline {
    font-size: 56px;
  }

  .hero__subtagline {
    font-size: 16px;
  }

  .hero__scroll {
    right: 24px;
    bottom: 24px;
  }
}
</style>
