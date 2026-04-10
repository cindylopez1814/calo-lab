<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  { num: t('process.p1_num'), title: t('process.p1_title'), desc: t('process.p1_desc') },
  { num: t('process.p2_num'), title: t('process.p2_title'), desc: t('process.p2_desc') },
  { num: t('process.p3_num'), title: t('process.p3_title'), desc: t('process.p3_desc') },
  { num: t('process.p4_num'), title: t('process.p4_title'), desc: t('process.p4_desc') },
])
</script>

<template>
  <section id="proceso" class="process-wrap">
    <div class="section">
      <h2 class="section-title">{{ t('process.title') }}</h2>

      <div class="process-steps">
        <div
          v-for="(step, i) in steps"
          :key="i"
          :class="['process-step', { 'process-step--last': i === steps.length - 1 }]"
        >
          <div class="process-step__number-wrap">
            <div class="process-step__number" aria-hidden="true">{{ step.num }}</div>
            <div v-if="i < steps.length - 1" class="process-step__connector" aria-hidden="true"></div>
          </div>
          <h3 class="process-step__title">{{ step.title }}</h3>
          <p class="process-step__desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-wrap {
  background: var(--color-bg-secondary);
  border-top: var(--border-w) solid var(--color-border);
  border-bottom: var(--border-w) solid var(--color-border);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.process-step {
  padding: 0 1.5rem 0 0;
}

.process-step--last {
  padding-right: 0;
}

.process-step__number-wrap {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}

.process-step__number {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--color-accent);
  line-height: 1;
  min-width: 4rem;
  flex-shrink: 0;
}

.process-step__connector {
  flex: 1;
  height: var(--border-thick);
  background: var(--color-border);
  margin-left: 0.5rem;
}

.process-step__title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  text-transform: uppercase;
  color: var(--color-text-primary);
  margin-bottom: 0.6rem;
}

.process-step__desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.65;
}

@media (max-width: 768px) {
  .process-steps {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    max-width: 480px;
  }

  .process-step {
    padding: 0;
    display: grid;
    grid-template-columns: 4rem 1fr;
    grid-template-rows: auto auto;
    column-gap: 1.25rem;
  }

  .process-step__number-wrap {
    grid-row: 1 / 3;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 0;
  }

  .process-step__number {
    min-width: unset;
  }

  .process-step__connector {
    display: none;
  }

  .process-step__title {
    margin-bottom: 0.3rem;
    align-self: end;
  }

  .process-step__desc {
    grid-column: 2;
  }
}
</style>
