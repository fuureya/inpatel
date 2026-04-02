<template>
  <Navbar />

  <!-- Hero Section with Background Image -->
  <section class="relative h-[28rem] flex items-center justify-center text-white overflow-hidden bg-black">
    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" style="background-image: url('/img/carousel/c1.jpg'); opacity: 0.6;">
    </div>
    <div class="relative z-10 text-center px-6">
      <div class="inline-block bg-telkom-red px-4 py-2 rounded mb-6 transform -rotate-1">
        <span class="text-xs font-black uppercase tracking-[0.2em]">Company Profile</span>
      </div>
      <h1 class="text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">{{ currentAboutData.hero.title }}</h1>
      <p class="text-xl lg:text-2xl font-medium text-gray-200 max-w-2xl mx-auto">{{ currentAboutData.hero.subtitle }}</p>
    </div>
  </section>

  <!-- About Us Content with Image -->
  <section class="py-16 md:py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-12 md:mb-0 relative">
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-telkom-red/5 rounded-full -z-10"></div>
          <img src="@/assets/img/a1.jpg" alt="Fiber Optic" class="rounded-2xl shadow-2xl w-full object-cover h-[400px]">
        </div>
        <div class="md:w-1/2 md:pl-20">
          <div class="w-16 h-1 bg-telkom-red mb-8"></div>
          <h2 class="text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">{{ currentAboutData.about.title }}</h2>
          <p class="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed mb-8 font-medium">
            {{ currentAboutData.about.paragraph1 }}
          </p>
          <p class="text-lg text-gray-400 dark:text-zinc-500 leading-relaxed font-medium">
            {{ currentAboutData.about.paragraph2 }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Visi & Misi Section with Image -->
  <section class="py-16 md:py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-16 mb-12 md:mb-0">
          <h2 class="text-5xl font-black text-gray-900 dark:text-white mb-10 tracking-tight">{{ currentAboutData.visionMission.title }}</h2>
          <div class="mb-12">
            <h3 class="text-xs font-black text-telkom-red uppercase tracking-widest mb-4 flex items-center">
              <span class="w-8 h-px bg-telkom-red mr-3"></span>
              {{ currentAboutData.visionMission.vision.title }}
            </h3>
            <p class="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
              {{ currentAboutData.visionMission.vision.content }}
            </p>
          </div>
          <div>
            <h3 class="text-xs font-black text-telkom-red uppercase tracking-widest mb-6 flex items-center">
              <span class="w-8 h-px bg-telkom-red mr-3"></span>
              {{ currentAboutData.visionMission.mission.title }}
            </h3>
            <ul class="space-y-4">
              <li v-for="item in currentAboutData.visionMission.mission.items" :key="item" class="flex items-start">
                <span class="w-2 h-2 bg-telkom-red rounded-full mt-2 mr-4 shrink-0"></span>
                <span class="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:w-1/2 relative">
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-200/50 rounded-full -z-10"></div>
          <img src="@/assets/img/a2.jpg" alt="Satelite" class="rounded-2xl shadow-2xl w-full object-cover h-[500px]">
        </div>
      </div>
    </div>
  </section>

  <!-- Clients Section -->
  <section class="py-16 md:py-24 bg-white dark:bg-zinc-900 transition-colors duration-300">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">{{ currentLanguage === 'ID' ? 'Klien Kami' : 'Our Clients' }}</h2>
      <div class="w-20 h-1.5 bg-telkom-red mx-auto mb-16"></div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
        <div v-for="client in displayedClients" :key="client"
          class="flex justify-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-lg">
          <img :src="client" alt="Client Logo"
            class="h-10 object-contain">
        </div>
      </div>
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex justify-center items-center mt-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-4 border-telkom-red"></div>
      </div>
      <!-- View More Button -->
      <div v-if="!showAllClients && !isLoading && clientLogos.length > 6" class="mt-16">
        <button @click="loadMoreClients"
          class="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm py-4 px-10 rounded-lg shadow-lg bg-telkom-red hover:bg-black transition-all">
          <span>{{ currentLanguage === 'ID' ? 'Lihat Selengkapnya' : 'View More' }}</span>
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref, computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const aboutDataIndonesia = {
  hero: {
    title: "Tentang Shangtel",
    subtitle: "Solusi IT, Layanan Terkelola, dan Integrasi Sistem Terbaik"
  },
  about: {
    title: "We Do IT With Passion",
    paragraph1: "PT. Shangkuriang Telekomunikasi Indonesia adalah perusahaan yang bergerak di bidang IT Solution, Managed Service, dan System Integration, dengan fokus utama pada penyediaan layanan jaringan internet yang berkualitas dan berkelanjutan.",
    paragraph2: "Didukung oleh tenaga ahli berpengalaman dan jaringan kerja yang luas, kami berkomitmen untuk memberikan layanan profesional, solusi teknologi inovatif, serta dukungan terbaik bagi pelanggan di berbagai sektor. kami berkomitmen untuk menghadirkan konektivitas berkualitas tinggi, layanan profesional, serta solusi teknologi terintegrasi yang mendukung transformasi digital di Indonesia. Bersama kami, wujudkan konektivitas tanpa batas untuk masa depan yang lebih cerdas dan terhubung."
  },
  visionMission: {
    title: "Visi & Misi",
    vision: {
      title: "Visi",
      content: "Menjadi perusahaan penyedia teknologi informasi dan komunikasi bertaraf internasional dengan layanan terbaik dalam pemberian solusi yang terpercaya dan bernilai tambah bagi pelanggan dan stakeholder."
    },
    mission: {
      title: "Misi",
      items: [
        "Menjalin kerjasama dengan perusahaan ICT baik dari dalam negeri maupun luar negeri.",
        "Bertekad membawa merek sendiri untuk berkembang menjadi industri manufacturing terkemuka di Indonesia.",
        "Mengembangkan Industri ICT dengan orientasi bisnis dan kultur profesional.",
        "Mengembangkan sumber daya dan potensi bisnis yang ada di lingkungan Indonesia timur.",
        "Meningkatkan benefit dan value bagi konsumen dan stakeholder."
      ]
    }
  }
}

const aboutDataEnglish = {
  hero: {
    title: "About Shangtel",
    subtitle: "The Best IT Solutions, Managed Services, and System Integration"
  },
  about: {
    title: "We Do IT With Passion",
    paragraph1: "PT. Shangkuriang Telekomunikasi Indonesia is a company engaged in IT Solutions, Managed Services, and System Integration, with a primary focus on providing high-quality and sustainable internet network services.",
    paragraph2: "Supported by experienced experts and an extensive work network, we are committed to providing professional services, innovative technology solutions, and the best support for customers in various sectors. We are committed to delivering high-quality connectivity, professional services, and integrated technology solutions that support digital transformation in Indonesia. With us, realize limitless connectivity for a smarter and more connected future."
  },
  visionMission: {
    title: "Vision & Mission",
    vision: {
      title: "Vision",
      content: "To become an international-class information and communication technology provider with the best service in providing trusted and value-added solutions for customers and stakeholders."
    },
    mission: {
      title: "Mission",
      items: [
        "Collaborate with ICT companies from both domestic and foreign countries.",
        "Determined to bring our own brand to develop into a leading manufacturing industry in Indonesia.",
        "Develop the ICT industry with a business orientation and professional culture.",
        "Develop existing resources and business potential in the eastern Indonesian environment.",
        "Increase benefits and value for consumers and stakeholders."
      ]
    }
  }
}

const currentAboutData = computed(() => {
  return currentLanguage.value === 'ID' ? aboutDataIndonesia : aboutDataEnglish
})

const clientLogos = ref([
  '/img/client/aston.png',
  '/img/client/diskominfo-papua-barat.png',
  '/img/client/capitol.webp',
  '/img/client/swissbell-manokwari.jpeg',
  '/img/client/pc24-telekomunikasi.png',
  '/img/client/Manokwari_City_Mall_logo.jpg',
  '/img/client/sjam.webp',
  '/img/client/rrri.png',
  '/img/client/polbangtan-manokwari.png',
  '/img/client/mitra-kreasi-darma.webp',
  '/img/client/hotel-mariat-sorong.jpg',
  '/img/client/bumi-pundi-karsa.jpeg',
  '/img/client/budi-starch-sweentener.png',
  '/img/client/brin.png',
  '/img/client/balmon.jpeg',
  '/img/client/asanabiak.png',
  '/img/client/alimhome.webp',
  '/img/client/medcopapua.png',
  '/img/client/bkhit.jpg',
  '/img/client/iconplus.webp'
]);

const showAllClients = ref(false);
const isLoading = ref(false);

const displayedClients = computed(() => {
  if (showAllClients.value) {
    return clientLogos.value;
  }
  return clientLogos.value.slice(0, 6);
});

const loadMoreClients = () => {
  isLoading.value = true;
  setTimeout(() => {
    showAllClients.value = true;
    isLoading.value = false;
  }, 1500); // 1.5 second delay
};
</script>

<style scoped>
/* Scoped styles for custom animations or effects if needed */
</style>