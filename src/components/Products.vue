<template>
  <section id="products" class="relative py-24 bg-white dark:bg-zinc-900 overflow-hidden transition-colors duration-300">
    <!-- Minimalist Background Pattern -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <div
          class="inline-flex items-center px-4 py-2 rounded-lg bg-telkom-red/10 text-telkom-red text-xs font-black uppercase tracking-widest mb-6">
          {{ currentProductData.badge }}
        </div>

        <h2 class="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          {{ currentProductData.title }}
        </h2>

        <p class="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
          {{ currentProductData.subtitle }}
        </p>
      </div>

      <!-- Products Grid -->
      <div class="flex-1 flex items-center justify-center px-6 pb-20">
        <div class="max-w-7xl mx-auto w-full">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">

            <!-- ShangtelSky Card -->
            <div class="group">
              <div
                class="relative bg-white dark:bg-zinc-900 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-zinc-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">

                <div class="relative z-10">
                  <!-- Product Image -->
                  <div class="mb-8 rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-800">
                    <img src="/img/products/sky.jpg" alt="Skyaccess Infrastructure"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  <!-- Icon & Title -->
                  <div class="flex items-center space-x-6 mb-8">
                    <div
                      class="w-16 h-16 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-800 rounded-xl flex items-center justify-center shadow-lg p-3">
                      <img src="/public/img/skyaccess.png" alt="Skyaccess Logo" class="w-full h-full object-contain" />
                    </div>
                    <h3 class="text-3xl font-black text-gray-900 dark:text-white">
                      Sky<span class="text-telkom-red">access</span>
                    </h3>
                  </div>

                  <!-- Description -->
                  <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed mb-8 font-medium">
                    {{ currentProductData.shangtelSky.description }}
                  </p>

                  <!-- Features -->
                  <div class="grid grid-cols-2 gap-4 mb-10">
                    <div v-for="feature in currentProductData.shangtelSky.features" :key="feature"
                      class="flex items-center space-x-3 text-sm">
                      <font-awesome-icon icon="check" class="text-telkom-red font-black" />
                      <span class="text-gray-700 dark:text-zinc-400 font-bold uppercase tracking-wider text-[10px]">{{ feature }}</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <a href="https://skyaccess.co.id/" target="_blank"
                    class="block w-full text-center bg-telkom-red text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm transition-all duration-300 hover:bg-black hover:shadow-xl">
                    {{ currentProductData.shangtelSky.buttonText }}
                    <font-awesome-icon icon="arrow-right" class="ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <!-- ShangtelHome Card -->
            <div class="group">
              <div
                class="relative bg-white dark:bg-zinc-900 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-zinc-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">

                <div class="relative z-10">
                  <!-- Product Image -->
                  <div class="mb-8 rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-800">
                    <img src="/img/products/ftth.jpg" alt="Shangtelhome FTTH"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>

                  <!-- Icon & Title -->
                  <div class="flex items-center space-x-6 mb-8">
                    <div
                      class="w-16 h-16 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-800 rounded-xl flex items-center justify-center shadow-lg p-3">
                      <img src="/public/img/shangtelhome.png" alt="Shangtelhome Logo"
                        class="w-full h-full object-contain" />
                    </div>
                    <h3 class="text-3xl font-black text-gray-900 dark:text-white">
                      Shangtel<span class="text-telkom-red">Home</span>
                    </h3>
                  </div>

                  <!-- Description -->
                  <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed mb-8 font-medium">
                    {{ currentProductData.shangtelHome.description }}
                  </p>

                  <!-- Features -->
                  <div class="grid grid-cols-2 gap-4 mb-10">
                    <div v-for="feature in currentProductData.shangtelHome.features" :key="feature"
                      class="flex items-center space-x-3 text-sm">
                      <font-awesome-icon icon="check" class="text-telkom-red font-black" />
                      <span class="text-gray-700 dark:text-zinc-400 font-bold uppercase tracking-wider text-[10px]">{{ feature }}</span>
                    </div>
                  </div>

                  <!-- CTA Button -->
                  <a href="https://shangtelhome.com" target="_blank"
                    class="block w-full text-center bg-telkom-red text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm transition-all duration-300 hover:bg-black hover:shadow-xl">
                    {{ currentProductData.shangtelHome.buttonText }}
                    <font-awesome-icon icon="arrow-right" class="ml-2" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const productDataIndonesia = {
  badge: "Distributor Resmi",
  title: "Distributor Eksklusif Peralatan Wireless",
  subtitle: "Berkat kepercayaan dari produsen mancanegara, kami menjadi distributor eksklusif untuk peralatan wireless di Asia Pasifik, sambil terus mengembangkan merek kami sendiri.",
  shangtelSky: {
    description: "SkyAccess Solusi enterprise merupakan produk Shangkuriang yang diciptakan untuk memenuhi kebutuhan kompleks dari berbagai segmen, mulai dari bisnis korporasi, pemerintahan, hingga pelaku bisnis yang membutuhkan sarana koneksi internet paling terkini. Solusi ini mencakup paket layanan terlengkap seperti fixed network connectivity, serta manajemen layanan dan monitoring terlengkap.",
    features: [
      "Installation",
      "4K Quality",
      "Ultra Fast",
      "Satelite VSAT",
      "Cheap Plans",
      "24/7 Support"
    ],
    buttonText: "Lihat Selengkapnya"
  },
  shangtelHome: {
    description: "ShangtelHome adalah produk unggulan dari PT. Shangkuriang Telekomunikasi Indonesia yang berfokus pada layanan internet berbasis Fiber To The Home (FTTH). Kami hadir untuk memberikan akses internet cepat, stabil, dan terjangkau bagi masyarakat, mendukung kebutuhan digital mulai dari hiburan, pendidikan, hingga bisnis.",
    features: [
      "Privasi & Keamanan Terjamin",
      "Kecepatan Stabil 24/7",
      "Layanan cepat & Responsive",
      "Infrastruktur Modern",
      "Support 24/7"
    ],
    buttonText: "Lihat Selengkapnya"
  }
}

const productDataEnglish = {
  badge: "Official Distributor",
  title: "Exclusive Distributor of Wireless Equipment",
  subtitle: "Thanks to the trust of international manufacturers, we have become the exclusive distributor for wireless equipment in the Asia Pacific, while continuing to develop our own brands.",
  shangtelSky: {
    description: "The SkyAccess Enterprise Solution is a Shangkuriang product created to meet the complex needs of various segments, from corporate businesses and government to business players who require the most up-to-date internet connection facilities. This solution includes a complete service package such as fixed network connectivity, as well as comprehensive service management and monitoring.",
    features: [
      "Installation",
      "4K Quality",
      "Ultra Fast",
      "Satellite VSAT",
      "Affordable Plans",
      "24/7 Support"
    ],
    buttonText: "Learn More"
  },
  shangtelHome: {
    description: "ShangtelHome is a flagship product of PT. Shangkuriang Telekomunikasi Indonesia that focuses on Fiber To The Home (FTTH) based internet services. We are here to provide fast, stable, and affordable internet access for the community, supporting digital needs from entertainment and education to business.",
    features: [
      "Guaranteed Privacy & Security",
      "Stable Speed 24/7",
      "Fast & Responsive Service",
      "Modern Infrastructure",
      "24/7 Support"
    ],
    buttonText: "Learn More"
  }
}

const currentProductData = computed(() => {
  return currentLanguage.value === 'ID' ? productDataIndonesia : productDataEnglish
})
</script>

<style scoped>
/* Glassmorphism enhanced effects */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

/* Custom hover effects */
.hover\:shadow-3xl:hover {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-3xl {
    font-size: 1.875rem;
  }

  .lg\:text-4xl {
    font-size: 2.25rem;
  }

  .p-8 {
    padding: 1.5rem;
  }

  .lg\:p-12 {
    padding: 2rem;
  }
}

/* Animation for floating elements */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>