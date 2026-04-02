<template>
  <Navbar />
  <section id="home">
    <Jumbotron />
  </section>

  <!-- Main Content -->
  <div class="bg-gray-50 dark:bg-zinc-900 border-y border-gray-100 dark:border-zinc-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">{{ currentWelcomeData.title }}</h2>
        <p class="text-xl text-gray-600 dark:text-zinc-400 leading-relaxed mb-10 font-medium">
          {{ currentWelcomeData.content }}
        </p>
        <div class="inline-block border-l-4 border-inpatel-primary pl-6 py-2">
          <p class="text-lg font-black text-inpatel-primary uppercase tracking-widest italic">
            {{ currentWelcomeData.tagline }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Infrastructure Section -->
  <section id="about">
    <Infra />
  </section>

  <!-- Services Section -->
  <section id="services">
    <Services />
  </section>

  <!-- Products Section -->
  <section id="products">
    <Products />
  </section>

  <!-- Footer -->
  <section id="contact">
    <Footer />
  </section>

  <!-- Floating CS Button -->
  <FloatingCsButton />
</template>

<script setup>
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import Infra from '@/components/Infra.vue'
import Services from '@/components/Services.vue'
import Products from '@/components/Products.vue'
import Footer from '@/components/Footer.vue'
import FloatingCsButton from '@/components/FloatingCsButton.vue'
import { useLanguage } from '@/composables/useLanguage.js'

const welcomeData = [
  {
    lang: "id",
    title: "Selamat Datang di PT Integra Palapa Telekomunikasi",
    content: "Kami adalah mitra strategis yang menghadirkan solusi konektivitas andal, inovatif, dan berkelanjutan. Berfokus pada pembangunan infrastruktur dan layanan telekomunikasi terintegrasi, kami berkomitmen untuk mendukung transformasi digital dan pertumbuhan ekonomi di seluruh penjuru Indonesia.",
    tagline: "“Connecting Indonesia with Excellence”"
  },
  {
    lang: "en",
    title: "Welcome to PT Integra Palapa Telekomunikasi",
    content: "We are a strategic partner providing reliable, innovative, and sustainable connectivity solutions. Focused on infrastructure development and integrated telecommunications services, we are committed to supporting digital transformation and economic growth throughout Indonesia.",
    tagline: "“Connecting Indonesia with Excellence”"
  }
]

const { currentLanguage } = useLanguage()

const currentWelcomeData = computed(() => {
  return currentLanguage.value === 'ID' ? welcomeData.find(data => data.lang === 'id') : welcomeData.find(data => data.lang === 'en')
})

</script>