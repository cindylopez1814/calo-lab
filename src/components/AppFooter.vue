<script setup>
import { useI18n } from 'vue-i18n'
import { CONTACT } from '../config.js'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__brand">
        <img src="/logos/Web-logo_nobg-white_black.png" alt="Calo Lab" class="footer__logo-img" />
        <p class="footer__tagline">{{ t('footer.tagline') }}</p>
      </div>

      <div class="footer__contact">
        <span class="footer__contact-title">{{ t('footer.contact_title') }}</span>
        <ul class="footer__links">
          <li>
            <a :href="CONTACT.waBase" target="_blank" rel="noopener noreferrer" :aria-label="t('footer.whatsapp')">
              <!-- WhatsApp -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </li>
          <li>
            <a :href="CONTACT.emailUrl" :aria-label="CONTACT.email">
              <!-- Email -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </li>
          <li>
            <a :href="CONTACT.instagramUrl" target="_blank" rel="noopener noreferrer" :aria-label="CONTACT.instagram">
              <!-- Instagram -->
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom container">
      <p>{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  border-top: var(--border-thick) solid var(--color-text-primary);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.footer__logo-img {
  height: 52px;
  width: auto;
  display: block;
  margin-bottom: 0.75rem;
}

.footer__tagline {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  max-width: 220px;
}

.footer__contact-title {
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  display: block;
  margin-bottom: 0.75rem;
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.footer__links a {
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  transition: color 0.2s;
}

.footer__links a:hover {
  color: var(--color-accent);
}

.footer__bottom {
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  border-top: var(--border-w) solid var(--color-border);
}

.footer__bottom p {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}

@media (max-width: 600px) {
  .footer__inner {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .footer__tagline {
    max-width: 100%;
  }

  .footer__logo-img {
    margin: 0 auto;
  }
}
</style>
