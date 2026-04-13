<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal.js'

const { t } = useI18n()

const container = ref(null)
useReveal(container)

const WA_BASE = 'https://wa.me/5548988666796?text='

const services = computed(() => [
  {
    key: 's1',
    name: t('services.s1_name'),
    price: t('services.s1_price'),
    priceAlt: t('services.s1_price_alt'),
    for: t('services.s1_for'),
    includes: [
      t('services.s1_i1'),
      t('services.s1_i2'),
      t('services.s1_i3'),
    ],
    delivery: t('services.s1_delivery'),
    waUrl: WA_BASE + encodeURIComponent(t('services.s1_wa')),
  },
  {
    key: 's2',
    name: t('services.s2_name'),
    price: t('services.s2_price'),
    priceAlt: t('services.s2_price_alt'),
    for: t('services.s2_for'),
    includes: [
      t('services.s2_i1'),
      t('services.s2_i2'),
      t('services.s2_i3'),
    ],
    delivery: t('services.s2_delivery'),
    waUrl: WA_BASE + encodeURIComponent(t('services.s2_wa')),
  },
  {
    key: 's3',
    name: t('services.s3_name'),
    price: t('services.s3_price'),
    priceAlt: t('services.s3_price_alt'),
    for: t('services.s3_for'),
    includes: [
      t('services.s3_i1'),
      t('services.s3_i2'),
      t('services.s3_i3'),
    ],
    delivery: t('services.s3_delivery'),
    waUrl: WA_BASE + encodeURIComponent(t('services.s3_wa')),
  },
])
</script>

<template>
  <section id="servicios" class="services-wrap" ref="container">
    <div class="section">
      <h2 class="section-title reveal">{{ t('services.title') }}</h2>

      <div class="services-grid">
        <article
          v-for="(service, i) in services"
          :key="service.key"
          :class="['service-card', 'reveal', `reveal-d${i + 1}`]"
        >
          <!-- Nombre -->
          <h3 class="service-card__name">{{ service.name }}</h3>

          <!-- Precio -->
          <div class="service-card__pricing">
            <span class="service-card__price">{{ service.price }}</span>
            <span class="service-card__price-alt">
              {{ t('services.price_or') }} {{ service.priceAlt }}
            </span>
          </div>

          <!-- Para quién -->
          <p class="service-card__for">{{ service.for }}</p>

          <!-- Incluye -->
          <ul class="service-card__includes">
            <li v-for="(item, j) in service.includes" :key="j">
              <span class="check" aria-hidden="true">✓</span>
              {{ item }}
            </li>
          </ul>

          <!-- Entrega -->
          <div class="service-card__delivery">
            <span class="delivery-label">{{ t('services.delivery_label') }}</span>
            {{ service.delivery }}
          </div>

          <!-- CTA -->
          <a
            :href="service.waUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="service-card__cta"
          >{{ t('services.cta') }}</a>
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
  align-items: stretch;
}

.service-card {
  background: var(--color-surface);
  border: var(--border-thick) solid var(--color-border);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.service-card:hover {
  border-color: var(--color-text-primary);
  transform: translateY(-6px);
  box-shadow: 6px 6px 0 var(--color-text-primary);
}

/* Nombre */
.service-card__name {
  font-family: var(--font-heading);
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--color-text-primary);
  line-height: 1;
}

/* Bloque de precio */
.service-card__pricing {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-bottom: 1.25rem;
  border-bottom: var(--border-w) solid var(--color-border);
}

.service-card__price {
  font-family: var(--font-heading);
  font-size: 2.8rem;
  color: var(--color-accent);
  line-height: 1;
}

.service-card__price-alt {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  opacity: 0.65;
  letter-spacing: 0.03em;
}

/* Para quién */
.service-card__for {
  font-size: 0.82rem;
  font-style: italic;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Lista de incluidos */
.service-card__includes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.service-card__includes li {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-primary);
  line-height: 1.4;
}

.check {
  color: var(--color-accent);
  font-size: 0.75rem;
  flex-shrink: 0;
  font-style: normal;
}

/* Entrega */
.service-card__delivery {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  padding: 0.75rem 0;
  border-top: var(--border-w) solid var(--color-border);
}

.delivery-label {
  color: var(--color-text-secondary);
  margin-right: 0.25rem;
}

/* CTA */
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

@media (max-width: 900px) {
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 460px;
    margin: 0 auto;
  }
}
</style>
