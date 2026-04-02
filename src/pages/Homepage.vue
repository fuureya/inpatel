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
        <div class="inline-block border-l-4 border-telkom-red pl-6 py-2">
          <p class="text-lg font-black text-telkom-red uppercase tracking-widest italic">
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
    title: "Selamat Datang di PT. Shangkuriang Telekomunikasi Indonesia",
    content: "Selamat Datang di PT. Shangkuriang Telekomunikasi Indonesia PT.Shangkuriang Telekomunikasi Indonesia adalah perusahaan yang bergerak di bidang IT Solution, Managed Service, dan System Integration, dengan fokus utama pada penyediaan layanan jaringan internet yang berkualitas dan berkelanjutan. Didukung oleh tenaga ahli berpengalaman dan jaringan kerja yang luas, kami berkomitmen untuk memberikan layanan profesional, solusi teknologi inovatif, serta dukungan terbaik bagi pelanggan di berbagai sektor. kami berkomitmen untuk menghadirkan konektivitas berkualitas tinggi, layanan profesional, serta solusi teknologi terintegrasi yang mendukung transformasi digital di Indonesia. Bersama kami, wujudkan konektivitas tanpa batas untuk masa depan yang lebih cerdas dan terhubung.",
    tagline: "“We Do IT With Passion” — Melayani Anda 24x7"
  },
  {
    lang: "en",
    title: "Welcome to PT. Shangkuriang Telekomunikasi Indonesia",
    content: "PT. Shangkuriang Telekomunikasi Indonesia is a company engaged in IT Solutions, Managed Services, and System Integration, with a primary focus on providing quality and sustainable internet network services.",
    tagline: "“We Do IT With Passion” — Serving you 24/7"
  }
]

const { currentLanguage } = useLanguage()

const currentWelcomeData = computed(() => {
  return currentLanguage.value === 'ID' ? welcomeData.find(data => data.lang === 'id') : welcomeData.find(data => data.lang === 'en')
})

</script>