<template>
  <Navbar />

  <!-- Hero Section with Background Image -->
  <section class="relative h-[28rem] flex items-center justify-center text-white overflow-hidden bg-black">
    <div class="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" style="background-image: url('@/assets/img/hero-1.png'); opacity: 0.6;">
    </div>
    <div class="relative z-10 text-center px-6">
      <div class="inline-block bg-inpatel-primary px-4 py-2 rounded mb-6 transform -rotate-1">
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
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-inpatel-primary/5 rounded-full -z-10"></div>
          <img src="@/assets/img/a1.jpg" alt="Fiber Optic" class="rounded-2xl shadow-2xl w-full object-cover h-[400px]">
        </div>
        <div class="md:w-1/2 md:pl-20">
          <div class="w-16 h-1 bg-inpatel-primary mb-8"></div>
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
            <h3 class="text-xs font-black text-inpatel-primary uppercase tracking-widest mb-4 flex items-center">
              <span class="w-8 h-px bg-inpatel-primary mr-3"></span>
              {{ currentAboutData.visionMission.vision.title }}
            </h3>
            <p class="text-xl text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
              {{ currentAboutData.visionMission.vision.content }}
            </p>
          </div>
          <div>
            <h3 class="text-xs font-black text-inpatel-primary uppercase tracking-widest mb-6 flex items-center">
              <span class="w-8 h-px bg-inpatel-primary mr-3"></span>
              {{ currentAboutData.visionMission.mission.title }}
            </h3>
            <ul class="space-y-4">
              <li v-for="item in currentAboutData.visionMission.mission.items" :key="item" class="flex items-start">
                <span class="w-2 h-2 bg-inpatel-primary rounded-full mt-2 mr-4 shrink-0"></span>
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
      <div class="w-20 h-1.5 bg-inpatel-primary mx-auto mb-16"></div>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
        <div v-for="client in displayedClients" :key="client"
          class="flex justify-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-lg">
          <img :src="client" alt="Client Logo"
            class="h-10 object-contain">
        </div>
      </div>
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex justify-center items-center mt-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-4 border-inpatel-primary"></div>
      </div>
      <!-- View More Button -->
      <div v-if="!showAllClients && !isLoading && clientLogos.length > 6" class="mt-16">
        <button @click="loadMoreClients"
          class="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm py-4 px-10 rounded-lg shadow-lg bg-inpatel-primary hover:bg-black transition-all">
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
    title: "Tentang Inpatel",
    subtitle: "Solusi Konektivitas Andal, Inovatif, dan Berkelanjutan"
  },
  about: {
    title: "Menghubungkan Indonesia",
    paragraph1: "PT Integra Palapa Telekomunikasi merupakan perusahaan yang bergerak di bidang telekomunikasi dengan komitmen kuat untuk menghadirkan solusi konektivitas yang andal, inovatif, dan berkelanjutan di Indonesia. Di tengah perkembangan teknologi yang semakin pesat dan kebutuhan akan komunikasi yang semakin tinggi, kami hadir sebagai mitra strategis yang mampu menjawab tantangan tersebut melalui layanan dan infrastruktur telekomunikasi yang terintegrasi.",
    paragraph2: "Didukung oleh tim profesional yang berpengalaman serta kompetensi teknis yang mumpuni, kami terus berupaya memberikan layanan terbaik kepada pelanggan, mulai dari pembangunan jaringan, pengelolaan infrastruktur telekomunikasi, hingga penyediaan solusi komunikasi berbasis teknologi terkini. Kami percaya bahwa konektivitas bukan hanya sekadar kebutuhan, melainkan fondasi utama dalam mendorong pertumbuhan ekonomi, transformasi digital, dan peningkatan kualitas hidup masyarakat."
  },
  visionMission: {
    title: "Dedikasi & Komitmen",
    vision: {
      title: "Integritas & Inovasi",
      content: "Dalam menjalankan operasionalnya, perusahaan menjunjung tinggi nilai integritas, profesionalisme, dan inovasi. Setiap proyek yang kami tangani dikerjakan dengan standar kualitas tinggi serta memperhatikan aspek efisiensi, keamanan, dan keberlanjutan. Kami juga senantiasa mengikuti perkembangan teknologi global untuk memastikan bahwa solusi yang kami tawarkan selalu relevan dan kompetitif di pasar."
    },
    mission: {
      title: "Masa Depan Terkoneksi",
      items: [
        "Membangun ekosistem telekomunikasi yang kuat dan merata di seluruh Indonesia.",
        "Menjadi mitra strategis pemerintah dan swasta dalam transformasi digital.",
        "Memprioritaskan efisiensi, keamanan, dan keberlanjutan dalam setiap infrastruktur.",
        "Memperluas jangkauan layanan ke wilayah perkotaan maupun daerah terpencil.",
        "Berkontribusi nyata dalam meningkatkan kualitas hidup melalui teknologi terkini."
      ]
    }
  }
}

const aboutDataEnglish = {
  hero: {
    title: "About Inpatel",
    subtitle: "Reliable, Innovative, and Sustainable Connectivity Solutions"
  },
  about: {
    title: "Connecting Indonesia",
    paragraph1: "PT Integra Palapa Telekomunikasi is a telecommunications company with a strong commitment to bringing reliable, innovative, and sustainable connectivity solutions to Indonesia. Amidst rapid technological advancements and increasing communication needs, we stand as a strategic partner capable of meeting these challenges through integrated telecommunications services and infrastructure.",
    paragraph2: "Supported by an experienced professional team and strong technical competence, we continuously strive to provide the best services to our customers, ranging from network construction and telecommunications infrastructure management to providing communication solutions based on the latest technology. We believe that connectivity is not just a necessity, but the primary foundation in driving economic growth, digital transformation, and improving the quality of people's lives."
  },
  visionMission: {
    title: "Dedication & Commitment",
    vision: {
      title: "Integrity & Innovation",
      content: "In its operations, the company upholds the values of integrity, professionalism, and innovation. Every project we handle is executed with high quality standards while considering aspects of efficiency, security, and sustainability. We also constantly follow global technology developments to ensure that the solutions we offer are always relevant and competitive in the market."
    },
    mission: {
      title: "A Connected Future",
      items: [
        "Building a strong and equitable telecommunications ecosystem across Indonesia.",
        "Becoming a strategic partner for government and private sectors in digital transformation.",
        "Prioritizing efficiency, security, and sustainability in every infrastructure project.",
        "Expanding service reach to both urban and remote areas needing adequate access.",
        "Making a real contribution to improving quality of life through the latest technology."
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