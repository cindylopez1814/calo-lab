<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal.js'

const { t } = useI18n()

const container = ref(null)
useReveal(container)

const projects = [
  { key: 'p1', url: 'https://isla-nativa.vercel.app/', img: '/IMG/isla-nativa.jpg' },
  { color: '#2e6b8c', key: 'p2', url: null },
]
</script>

<template>
  <section id="proyectos" class="projects-wrap" ref="container">
    <div class="section">
      <h2 class="section-title reveal">{{ t('projects.title') }}</h2>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="i"
          :class="['project-card', 'reveal', `reveal-d${i + 1}`]"
        >
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card__mockup-link"
            aria-label="Ver proyecto"
          >
            <div class="project-card__mockup" aria-hidden="true">
              <img v-if="project.img" :src="project.img" :alt="t(`projects.${project.key}_name`)" class="project-card__img" loading="lazy" decoding="async" />
              <div v-else class="project-card__mockup-inner" :style="{ backgroundColor: project.color }"></div>
              <span class="project-card__mockup-hover">Ver proyecto ↗</span>
            </div>
          </a>
          <div
            v-else
            class="project-card__mockup"
            :style="{ backgroundColor: project.color }"
            aria-hidden="true"
          >
            <div class="project-card__mockup-inner"></div>
          </div>

          <div class="project-card__info">
            <h3 class="project-card__name">{{ t(`projects.${project.key}_name`) }}</h3>
            <span class="project-card__niche">{{ t(`projects.${project.key}_niche`) }}</span>
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link"
            >↗</a>
            <span v-else class="project-card__status">{{ t('projects.status') }}</span>
          </div>
        </article>
      </div>

      <div class="projects-cta reveal">
        <p class="projects-cta__text">{{ t('projects.cta') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-wrap {
  background: var(--color-bg-secondary);
  border-top: var(--border-w) solid var(--color-border);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.project-card {
  border: var(--border-thick) solid var(--color-border);
  overflow: hidden;
  will-change: transform;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.project-card:hover {
  border-color: var(--color-text-primary);
  transform: translateY(-6px);
  box-shadow: 6px 6px 0 var(--color-text-primary);
}

.project-card__mockup-link {
  display: block;
}

.project-card__mockup {
  width: 100%;
  aspect-ratio: 16 / 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.project-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.4s ease;
}

.project-card__mockup-link:hover .project-card__img {
  transform: scale(1.04);
}

.project-card__mockup-inner {
  width: 55%;
  height: 60%;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.project-card__mockup-hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  color: #f2ede6;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.project-card__mockup-link:hover .project-card__mockup-hover {
  opacity: 1;
}

.project-card__mockup-link:hover .project-card__mockup-inner {
  transform: scale(0.95);
}

.project-card__info {
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  background: var(--color-surface);
  border-top: var(--border-w) solid var(--color-border);
}

.project-card__name {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.project-card__niche {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  flex: 1;
}

.project-card__link {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-left: auto;
  transition: opacity 0.2s;
}

.project-card__link:hover {
  opacity: 0.7;
}

.project-card__status {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
  background: transparent;
  border: var(--border-w) solid var(--color-accent);
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}

.projects-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding: 3rem 0 0;
  border-top: var(--border-w) solid var(--color-border);
}

.projects-cta__text {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: var(--color-text-primary);
  text-transform: uppercase;
  line-height: 1.1;
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
