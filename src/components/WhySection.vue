<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = computed(() => [
  { num: '01', title: t('why.w1_title'), desc: t('why.w1_desc') },
  { num: '02', title: t('why.w2_title'), desc: t('why.w2_desc') },
  { num: '03', title: t('why.w3_title'), desc: t('why.w3_desc') },
  { num: '04', title: t('why.w4_title'), desc: t('why.w4_desc') },
])
</script>

<template>
  <section id="diferencial" class="why-wrap">
    <div class="section">
      <h2 class="section-title">{{ t('why.title') }}</h2>

      <div class="why-grid">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="why-item"
        >
          <span class="why-item__num" aria-hidden="true">{{ item.num }}</span>
          <h3 class="why-item__title">{{ item.title }}</h3>
          <p class="why-item__desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-wrap {
  background: var(--color-bg);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  border-top: var(--border-thick) solid var(--color-text-primary);
  border-left: var(--border-thick) solid var(--color-text-primary);
}

.why-item {
  padding: 2.5rem 2rem;
  border-right: var(--border-thick) solid var(--color-text-primary);
  border-bottom: var(--border-thick) solid var(--color-text-primary);
  transition: background-color 0.2s;
}

.why-item:hover {
  background: var(--color-bg-secondary);
}

.why-item__num {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  color: var(--color-accent);
  display: block;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.why-item__title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.15;
}

.why-item__desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 360px;
}

@media (max-width: 640px) {
  .why-grid {
    grid-template-columns: 1fr;
  }
}
</style>
