<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const visible = ref(false)
const waUrl = 'https://wa.me/5548988666796?text=' + encodeURIComponent('Hola, quiero saber más sobre los servicios de Calo Lab.')

function handleScroll() {
  visible.value = window.scrollY > window.innerHeight * 0.8
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <transition name="float">
    <a
      v-if="visible"
      :href="waUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="wa-float"
      :aria-label="t('aria.whatsapp_float')"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  </transition>
</template>

<style scoped>
.wa-float {
  display: none;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 99;
  width: 52px;
  height: 52px;
  background: #25d366;
  color: #ffffff;
  border: var(--border-thick) solid var(--color-text-primary);
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 0 var(--color-text-primary);
  transition: transform 0.2s, box-shadow 0.2s;
}

.wa-float:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--color-text-primary);
}

.wa-float:active {
  transform: translate(0, 0);
  box-shadow: 2px 2px 0 var(--color-text-primary);
}

.float-enter-active,
.float-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.float-enter-from,
.float-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(8px);
}

@media (max-width: 768px) {
  .wa-float {
    display: flex;
  }
}
</style>
