<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = [
  { color: '#4a7c59', key: 'p1', url: 'https://isla-nativa.vercel.app/' },
  { color: '#2e6b8c', key: 'p2', url: null },
]
</script>

<template>
  <section id="proyectos" class="projects-wrap">
    <div class="section">
      <h2 class="section-title">{{ t('projects.title') }}</h2>

      <div class="projects-grid">
        <article
          v-for="(project, i) in projects"
          :key="i"
          class="project-card"
        >
          <div
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

      <div class="projects-cta">
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.project-card {
  border: var(--border-thick) solid var(--color-border);
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}

.project-card:hover {
  border-color: var(--color-text-primary);
  transform: translateY(-3px);
}

.project-card__mockup {
  width: 100%;
  aspect-ratio: 16 / 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card__mockup-inner {
  width: 55%;
  height: 60%;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
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

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
