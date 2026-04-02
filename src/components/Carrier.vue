<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[28rem] flex items-center justify-center text-white overflow-hidden bg-black">
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" style="background-image: url('/img/karir1.jpg'); opacity: 0.5;">
      </div>
      <div class="relative z-10 text-center px-6">
        <div class="inline-block bg-telkom-red px-4 py-2 rounded mb-6 transform rotate-1">
          <span class="text-xs font-black uppercase tracking-[0.2em]">Careers</span>
        </div>
        <h1 class="text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-none">{{ currentCarrierData.hero.title }}</h1>
        <p class="text-xl lg:text-2xl font-medium text-gray-200 max-w-2xl mx-auto">{{ currentCarrierData.hero.subtitle }}</p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-24 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div class="container mx-auto px-6 text-center max-w-4xl">
        <div class="w-16 h-1 bg-telkom-red mx-auto mb-8"></div>
        <h2 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">{{ currentCarrierData.intro.title }}</h2>
        <p class="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
          {{ currentCarrierData.intro.content }}
        </p>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden transition-colors duration-300">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <div class="absolute inset-0 bg-[url('/img/map.png')] dark:grayscale bg-center bg-cover"></div>
      </div>
      <div class="container mx-auto px-6 relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{{ currentCarrierData.whyJoinUs.title }}</h2>
          <div class="w-20 h-1.5 bg-telkom-red mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(card, index) in currentCarrierData.whyJoinUs.cards" :key="index"
            class="group bg-white dark:bg-zinc-800 p-10 rounded-2xl border border-gray-100 dark:border-zinc-700 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div class="w-16 h-16 bg-telkom-red/10 text-telkom-red rounded-xl flex items-center justify-center mb-8 group-hover:bg-telkom-red group-hover:text-white transition-colors duration-500">
              <font-awesome-icon :icon="['fas', ['lightbulb', 'users', 'chart-line'][index]]" class="text-2xl" />
            </div>
            <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-4">{{ card.title }}</h3>
            <p class="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{{ card.content }}</p>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()



const carrierDataIndonesia = {
  hero: {
    title: "Bangun Masa Depanmu Bersama Shangtel",
    subtitle: "Jadilah bagian dari tim yang bersemangat dalam inovasi teknologi."
  },
  intro: {
    title: "We Do IT With Passion",
    content: "Di Shangtel, kami percaya bahwa semangat dan dedikasi adalah kunci untuk memberikan solusi terbaik. Kami adalah tim yang solid, kreatif, dan selalu haus akan tantangan baru. Budaya kerja kami didasarkan pada kolaborasi, inovasi, dan pertumbuhan berkelanjutan."
  },
  whyJoinUs: {
    title: "Mengapa Bergabung Dengan Kami?",
    cards: [
      {
        title: "Inovasi Tanpa Henti",
        content: "Kami selalu mencari cara baru untuk memecahkan masalah dan menciptakan teknologi masa depan."
      },
      {
        title: "Lingkungan Kolaboratif",
        content: "Anda akan bekerja dengan para ahli di bidangnya dalam lingkungan yang mendukung dan terbuka."
      },
      {
        title: "Pengembangan Karir",
        content: "Kami berinvestasi pada pertumbuhan profesional Anda melalui pelatihan dan peluang pengembangan."
      }
    ]
  },

}

const carrierDataEnglish = {
  hero: {
    title: "Build Your Future with Shangtel",
    subtitle: "Be part of a team that is passionate about technological innovation."
  },
  intro: {
    title: "We Do IT With Passion",
    content: "At Shangtel, we believe that passion and dedication are the keys to providing the best solutions. We are a solid, creative team that is always hungry for new challenges. Our work culture is based on collaboration, innovation, and continuous growth."
  },
  whyJoinUs: {
    title: "Why Join Us?",
    cards: [
      {
        title: "Endless Innovation",
        content: "We are always looking for new ways to solve problems and create future technologies."
      },
      {
        title: "Collaborative Environment",
        content: "You will work with experts in their fields in a supportive and open environment."
      },
      {
        title: "Career Development",
        content: "We invest in your professional growth through training and development opportunities."
      }
    ]
  },

}

const currentCarrierData = computed(() => {
  return currentLanguage.value === 'ID' ? carrierDataIndonesia : carrierDataEnglish
})
</script>

<style scoped>
/* Scoped styles if needed */
</style>
