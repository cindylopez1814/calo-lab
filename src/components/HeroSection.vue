<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const waUrl = 'https://wa.me/5548988666796?text=Hola+Cindy,+quiero+hablar+sobre+mi+sitio+web'

const heroEl = ref(null)

function handleMouseMove(e) {
  const rect = heroEl.value.getBoundingClientRect()
  heroEl.value.style.setProperty('--cx', `${e.clientX - rect.left}px`)
  heroEl.value.style.setProperty('--cy', `${e.clientY - rect.top}px`)
}

function handleMouseLeave() {
  heroEl.value.style.setProperty('--cx', '-999px')
  heroEl.value.style.setProperty('--cy', '-999px')
}

onMounted(() => {
  heroEl.value.addEventListener('mousemove', handleMouseMove)
  heroEl.value.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  heroEl.value?.removeEventListener('mousemove', handleMouseMove)
  heroEl.value?.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <section class="hero" ref="heroEl">
    <div class="hero__video-placeholder"></div>
    <div class="hero__overlay" aria-hidden="true"></div>
    <div class="hero__spotlight" aria-hidden="true"></div>

    <div class="hero__content">
      <p class="hero__eyebrow">DISEÑO &amp; DESENVOLVIMENTO WEB</p>
      <h1 class="hero__tagline">{{ t('hero.tagline') }}</h1>
      <p class="hero__subtagline">{{ t('hero.subtagline') }}</p>
      <a
        :href="waUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hero__cta"
      >{{ t('hero.cta') }}</a>
    </div>

    <div class="hero__scroll-indicator" aria-hidden="true">
      <span class="hero__scroll-label">scroll</span>
      <div class="hero__scroll-line">
        <div class="hero__scroll-dot"></div>
      </div>
    </div>
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
  --cx: -999px;
  --cy: -999px;
}

.hero__video-placeholder {
  position: absolute;
  inset: 0;
  background: #0d0d0d;
  z-index: 0;
}

.hero__video-placeholder::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
  z-index: 1;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(13, 13, 13, 0.9) 0%,
    rgba(13, 13, 13, 0.35) 50%,
    rgba(13, 13, 13, 0.1) 100%
  );
  z-index: 1;
}

/* ── Spotlight ───────────────────────────────────────── */
.hero__spotlight {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: radial-gradient(
    180px circle at var(--cx) var(--cy),
    rgba(255, 255, 255, 0.07) 0%,
    transparent 70%
  );
  transition: background 0.05s linear;
}

/* ── Content ─────────────────────────────────────────── */
.hero__content {
  position: relative;
  z-index: 3;
  padding: 0 48px 64px;
  max-width: 820px;
}

.hero__eyebrow {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 16px;
  animation: fadeIn 0.6s ease both;
  animation-delay: 0.2s;
}

.hero__tagline {
  font-family: var(--font-heading);
  font-size: clamp(56px, 8vw, 96px);
  line-height: 0.95;
  color: #f2ede6;
  text-transform: uppercase;
  animation: clipWipe 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 0.45s;
}

.hero__subtagline {
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.6;
  color: rgba(242, 237, 230, 0.7);
  margin-top: 20px;
  max-width: 480px;
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 1s;
}

.hero__cta {
  display: inline-block;
  margin-top: 36px;
  padding: 16px 36px;
  background: var(--color-accent);
  color: #f2ede6;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  animation: scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 1.3s;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.hero__cta:hover {
  background: var(--color-accent-hover);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(217, 95, 43, 0.35);
}

/* ── Scroll indicator ────────────────────────────────── */
.hero__scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: fadeIn 1s ease both;
  animation-delay: 2s;
}

.hero__scroll-label {
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(242, 237, 230, 0.7);
}

.hero__scroll-line {
  width: 1px;
  height: 52px;
  background: rgba(242, 237, 230, 0.3);
  position: relative;
  overflow: hidden;
}

.hero__scroll-dot {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 14px;
  background: #f2ede6;
  animation: scrollDrop 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 2.2s;
}

@keyframes scrollDrop {
  0%   { top: -12px; opacity: 1; }
  80%  { top: 48px;  opacity: 0.4; }
  100% { top: 48px;  opacity: 0; }
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    height: 88vh;
    justify-content: center;
  }

  .hero__content {
    padding: 0 24px 48px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__subtagline {
    font-size: 16px;
  }

  .hero__scroll-indicator {
    display: none;
  }
}
</style>
