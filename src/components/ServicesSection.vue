<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const WA_BASE = 'https://wa.me/5548988666796?text='

const services = computed(() => [
  {
    name: t('services.s1_name'),
    price: t('services.s1_price'),
    desc: t('services.s1_desc'),
    delivery: t('services.s1_delivery'),
    waUrl: WA_BASE + encodeURIComponent(t('services.s1_wa')),
    featured: false,
  },
  {
    name: t('services.s2_name'),
    price: t('services.s2_price'),
    desc: t('services.s2_desc'),
    delivery: t('services.s2_delivery'),
    waUrl: WA_BASE + encodeURIComponent(t('services.s2_wa')),
    featured: true,
  },
  {
    name: t('services.s3_name'),
    price: t('services.s3_price'),
    desc: t('services.s3_desc'),
    delivery: t('services.s3_delivery'),
    waUrl: WA_BASE + encodeURIComponent(t('services.s3_wa')),
    featured: false,
  },
])
</script>

<template>
  <section id="servicios" class="services-wrap">
    <div class="section">
      <h2 class="section-title">{{ t('services.title') }}</h2>

      <div class="services-grid">
        <article
          v-for="(service, i) in services"
          :key="i"
          :class="['service-card', { 'service-card--featured': service.featured }]"
        >
          <div v-if="service.featured" class="service-card__badge" aria-label="Servicio destacado">
            {{ t('services.featured_badge') }}
          </div>

          <div class="service-card__header">
            <h3 class="service-card__name">{{ service.name }}</h3>
            <div class="service-card__price">{{ service.price }}</div>
          </div>

          <p class="service-card__desc">{{ service.desc }}</p>

          <div class="service-card__delivery">
            <span class="delivery-label">{{ t('services.delivery_label') }}</span>
            {{ service.delivery }}
          </div>

          <a
            :href="service.waUrl"
            target="_blank"
            rel="noopener noreferrer"
            :class="['service-card__cta', { 'service-card__cta--featured': service.featured }]"
          >
            {{ t('services.cta') }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-wrap {
  background: var(--color-bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.service-card {
  position: relative;
  background: var(--color-surface);
  border: var(--border-thick) solid var(--color-border);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border-color 0.2s, transform 0.2s;
}

.service-card:hover {
  border-color: var(--color-text-primary);
  transform: translateY(-3px);
}

.service-card--featured {
  border-color: var(--color-accent);
  border-width: var(--border-thick);
  margin-top: 1rem;
}

.service-card--featured:hover {
  border-color: var(--color-accent-hover);
}

.service-card__badge {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-accent);
  color: #ffffff;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  padding: 0.25rem 1rem;
  border: var(--border-w) solid var(--color-text-primary);
  white-space: nowrap;
  text-transform: uppercase;
}

.service-card__header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.service-card__name {
  font-family: var(--font-heading);
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--color-text-primary);
}

.service-card__price {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--color-accent);
  line-height: 1;
}

.service-card__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
  flex: 1;
}

.service-card__delivery {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  padding: 0.5rem 0;
  border-top: var(--border-w) solid var(--color-border);
  border-bottom: var(--border-w) solid var(--color-border);
  letter-spacing: 0.04em;
}

.delivery-label {
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  margin-right: 0.35rem;
  color: var(--color-text-secondary);
}

.service-card__cta {
  display: block;
  text-align: center;
  padding: 0.75rem 1rem;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: var(--border-thick) solid var(--color-text-primary);
  color: var(--color-text-primary);
  background: transparent;
  transition: background-color 0.2s, color 0.2s;
}

.service-card__cta:hover {
  background: var(--color-text-primary);
  color: var(--color-bg);
}

.service-card__cta--featured {
  background: var(--color-accent);
  border-color: var(--color-text-primary);
  color: #ffffff;
}

.service-card__cta--featured:hover {
  background: var(--color-accent-hover);
  color: #ffffff;
}

@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0 auto;
  }

  .service-card--featured {
    margin-top: 0;
  }
}
</style>
