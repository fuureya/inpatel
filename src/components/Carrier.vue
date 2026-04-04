<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[28rem] flex items-center justify-center text-white overflow-hidden bg-black">
      <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" :style="{ backgroundImage: `url(${service4})`, opacity: 0.5 }">
      </div>
      <div class="relative z-10 text-center px-6">
        <div class="inline-block bg-inpatel-primary px-4 py-2 rounded mb-6 transform rotate-1">
          <span class="text-xs font-black uppercase tracking-[0.2em]">Careers</span>
        </div>
        <h1 class="text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-none">{{ currentCarrierData.hero.title }}</h1>
        <p class="text-xl lg:text-2xl font-medium text-gray-200 max-w-2xl mx-auto">{{ currentCarrierData.hero.subtitle }}</p>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-24 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div class="container mx-auto px-6 text-center max-w-4xl">
        <div class="w-16 h-1 bg-inpatel-primary mx-auto mb-8"></div>
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
          <div class="absolute inset-0 bg-gradient-to-br from-inpatel-primary/5 to-transparent dark:grayscale bg-center bg-cover"></div>
      </div>
      <div class="container mx-auto px-6 relative">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{{ currentCarrierData.whyJoinUs.title }}</h2>
          <div class="w-20 h-1.5 bg-inpatel-primary mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(card, index) in currentCarrierData.whyJoinUs.cards" :key="index"
            class="group bg-white dark:bg-zinc-800 p-10 rounded-2xl border border-gray-100 dark:border-zinc-700 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div class="w-16 h-16 bg-inpatel-primary/10 text-inpatel-primary rounded-xl flex items-center justify-center mb-8 group-hover:bg-inpatel-primary group-hover:text-white transition-colors duration-500">
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

// Import Assets
import service4 from '@/assets/img/service4.jpg'

const { currentLanguage } = useLanguage()



const carrierDataIndonesia = {
  hero: {
    title: "Bangun Masa Depanmu Bersama Inpatel",
    subtitle: "Jadilah bagian dari tim yang bersemangat dalam membawa inovasi teknologi di seluruh Indonesia."
  },
  intro: {
    title: "Menghubungkan Indonesia dengan Keunggulan",
    content: "Di Inpatel, kami percaya bahwa integritas, profesionalisme, dan inovasi adalah kunci untuk memberikan solusi terbaik. Kami adalah tim yang solid, kreatif, dan selalu berupaya menciptakan masa depan yang lebih terkoneksi. Budaya kerja kami didasarkan pada kolaborasi dan dedikasi untuk menghubungkan setiap sudut negeri."
  },
  whyJoinUs: {
    title: "Mengapa Bergabung Dengan Kami?",
    cards: [
      {
        title: "Inovasi Berkelanjutan",
        content: "Kami selalu mencari cara baru untuk menghadirkan solusi teknologi yang relevan dan kompetitif."
      },
      {
        title: "Mitra Strategis Global",
        content: "Anda akan bekerja dengan jaringan profesional luas dan standar kualitas tinggi internasional."
      },
      {
        title: "Pertumbuhan Bersama",
        content: "Kami berinvestasi pada masa depan dengan memperluas jangkauan layanan ke seluruh Indonesia."
      }
    ]
  },
}

const carrierDataEnglish = {
  hero: {
    title: "Build Your Future with Inpatel",
    subtitle: "Be part of a passionate team bringing technological innovation across Indonesia."
  },
  intro: {
    title: "Connecting Indonesia with Excellence",
    content: "At Inpatel, we believe that integrity, professionalism, and innovation are the keys to providing the best solutions. We are a solid, creative team always striving to create a more connected future. Our work culture is based on collaboration and dedication to connecting every corner of the country."
  },
  whyJoinUs: {
    title: "Why Join Us?",
    cards: [
      {
        title: "Sustainable Innovation",
        content: "We are always looking for new ways to deliver relevant and competitive technology solutions."
      },
      {
        title: "Global Strategic Partner",
        content: "You will work with an extensive professional network and high international quality standards."
      },
      {
        title: "Shared Growth",
        content: "We invest in the future by expanding our service reach throughout Indonesia."
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
