<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import WhySection from './components/WhySection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <ServicesSection />
    <ProcessSection />
    <WhySection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <AppFooter />
  <WhatsAppFloat />
</template>
