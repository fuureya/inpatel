<template>
  <Navbar />

  <main class="bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="relative bg-white dark:bg-zinc-900 pt-32 pb-24 border-b border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center px-4 py-2 rounded-lg bg-telkom-red/10 text-telkom-red text-xs font-black uppercase tracking-widest mb-8"
        >
          {{ currentContent.badge }}
        </div>
        <h1 class="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-8 max-w-4xl mx-auto">
          {{ currentContent.title }}
        </h1>
        <p class="max-w-3xl mx-auto text-xl text-gray-500 dark:text-zinc-400 leading-relaxed font-medium">
          {{ currentContent.subtitle }}
        </p>
      </div>
    </section>

    <!-- Services List Section -->
    <section class="py-20 lg:py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="space-y-20 lg:space-y-28">
          <div
            v-for="(service, index) in currentContent.services"
            :key="service.title"
            class="group relative"
          >
            <div
              class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
            >
              <!-- Image Container -->
              <div class="w-full lg:w-1/2">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    :src="getImageUrl(service.image)"
                    :alt="service.title"
                    class="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>

              <!-- Text Content -->
              <div class="w-full lg:w-1/2">
                <div
                  class="relative transition-all duration-500 ease-in-out group-hover:lg:translate-x-4"
                >
                  <div class="mb-4">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 bg-telkom-red text-white rounded-xl shadow-xl shadow-telkom-red/20 mb-8 transition-transform duration-500 group-hover:rotate-6"
                    >
                      <font-awesome-icon
                        :icon="service.icon"
                        class="text-2xl"
                      />
                    </div>
                    <div
                      class="text-xs font-black text-telkom-red uppercase tracking-[0.2em] mb-4"
                    >
                      {{ currentContent.serviceTypeLabel }}
                    </div>
                    <h2
                      class="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                      {{ service.title }}
                    </h2>
                    <div class="text-xl font-bold text-gray-700 dark:text-zinc-300 mb-6 flex items-center">
                      <span class="w-8 h-1 bg-telkom-red mr-4"></span>
                      {{ service.subtitle }}
                    </div>
                  </div>
                  <p
                    class="text-lg text-gray-500 dark:text-zinc-400 leading-relaxed mb-10 font-medium"
                  >
                    {{ service.description }}
                  </p>

                  <!-- Points List -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <div
                      v-for="(point, pIndex) in service.points"
                      :key="pIndex"
                      class="flex items-center space-x-3 bg-white dark:bg-zinc-800 p-4 rounded-xl border border-gray-100 dark:border-zinc-700 shadow-sm"
                    >
                      <font-awesome-icon
                        icon="check"
                        class="text-telkom-red font-black"
                      />
                      <span class="text-xs font-black text-gray-700 dark:text-zinc-300 uppercase tracking-widest">{{ point }}</span>
                    </div>
                  </div>

                  <a
                    :href="getWhatsAppLink(service.title)"
                    target="_blank"
                    class="inline-block bg-zinc-900 dark:bg-zinc-800 dark:hover:bg-telkom-red text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-sm transition-all hover:bg-telkom-red hover:shadow-xl"
                  >
                    {{ currentContent.cta }}
                    <font-awesome-icon
                      icon="arrow-right"
                      class="ml-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <FloatingCsButton />
  <Footer />
</template>

<script setup>
import { computed } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import FloatingCsButton from "@/components/FloatingCsButton.vue";
import { useLanguage } from "@/composables/useLanguage.js";

const { currentLanguage } = useLanguage();

const servicesData = {
  en: {
    badge: "Our Premium Services",
    title: "Elevate Your Business with Cutting-Edge IT & ISP Solutions",
    subtitle:
      "Discover how Shangtel's comprehensive suite of IT and Internet Service Provider solutions can transform your operations, enhance security, and drive unparalleled growth.",
    cta: "Explore Solution",
    serviceTypeLabel: "SERVICE MENU",
    services: [
      {
        title: "Managed IT Services & 24/7 Support",
        subtitle: "Professional and Sustainable Infrastructure Management",
        description:
          "We provide comprehensive IT system management services, from maintenance and troubleshooting to performance optimization. Our 24/7 standby technical assistance ensures smooth business operations without interruption, whenever needed.",
        points: [
          "24/7 Monitoring & Support",
          "Preventive Maintenance",
          "System Optimization",
          "Enterprise Technical Support",
        ],
        icon: "headset",
        image: "s1.jpeg",
      },
      {
        title: "Cyber Security & Data Protection",
        subtitle: "Maximum Protection for Your Digital Assets",
        description:
          "Security is the top priority. We deliver layered security solutions to protect strategic corporate networks, systems, and data from cyber threats. Our proactive monitoring systems protect your digital assets from external threats.",
        points: [
          "Firewall & Network Security",
          "Data Encryption",
          "Threat Detection & Mitigation",
          "Security Monitoring",
        ],
        icon: "shield-halved",
        image: "s2.jpeg",
      },
      {
        title: "IT Infrastructure & Network Design",
        subtitle: "Tough and Scalable System Architecture",
        description:
          "Planning and implementation of IT infrastructure designed to suit your business needs, with enterprise standards and long-term expansion readiness. We design architectures that are efficient, modern, and effective.",
        points: [
          "Network Architecture Design",
          "Fiber Optic & Structured Cabling",
          "System Integration",
          "Scalable Infrastructure",
        ],
        icon: "network-wired",
        image: "s3.jpeg",
      },
      {
        title: "Internet Service Provider (ISP) Solutions",
        subtitle: "Stable, Fast, and Reliable Connection",
        description:
          "As an internet service provider, Shangtel ensures your business connectivity remains stable with professional technical support and measurable SLAs. High-speed fiber optic-based solutions for future connectivity.",
        points: [
          "Dedicated Internet",
          "Corporate Broadband",
          "Backup Link & Redundancy",
          "SLA Guarantee",
        ],
        icon: "wifi",
        image: "s4.jpeg",
      },
      {
        title: "Server & Storage Solutions",
        subtitle: "Secure and Fast Data Infrastructure",
        description:
          "Provision, management, and optimization services for secure and fast server infrastructure and data storage. We ensure your data is always accessible and protected with the latest storage technology.",
        points: [
          "Cloud & Physical Servers",
          "Data Backup Solutions",
          "High-Performance Storage",
          "Server Optimization",
        ],
        icon: "database",
        image: "s5.jpeg",
      },
      {
        title: "Enterprise IT Systems",
        subtitle: "Scalable Enterprise Solutions",
        description:
          "Development of integrated enterprise-scale IT systems designed for long-term business efficiency and scalability. We help you streamline your business processes with custom software and system integration.",
        points: [
          "ERP & CRM Integration",
          "Custom Software Development",
          "Workflow Automation",
          "Enterprise Scalability",
        ],
        icon: "server",
        image: "s6.jpeg",
      },
      {
        title: "Multimedia & Visual Solutions",
        subtitle: "Modern Interactive Multimedia",
        description:
          "Integration of modern multimedia solutions, from videotron to interactive audio-visual systems for stunning publications. We provide high-quality visual experiences for your corporate and public communications.",
        points: [
          "Videotron & LED Displays",
          "Interactive AV Systems",
          "Digital Signage Solutions",
          "Multimedia Integration",
        ],
        icon: "desktop",
        image: "s7.jpeg",
      },
      {
        title: "IT Strategic Consulting",
        subtitle: "Expert Technology Blueprinting",
        description:
          "Strategic consulting services by experts to help you design the right technology blueprint for your business. We provide insights and recommendations to align your IT strategy with your business goals.",
        points: [
          "IT Roadmap Development",
          "Digital Transformation",
          "Technology Assessment",
          "Cost Optimization",
        ],
        icon: "user-tie",
        image: "s8.jpeg",
      },
    ],
  },
  id: {
    badge: "Layanan Premium Kami",
    title: "MAKSIMALKAN POTENSI BISNIS ANDA DENGAN SOLUSI IT KAMI!",
    subtitle:
      "Temukan bagaimana rangkaian solusi IT dan Penyedia Layanan Internet (ISP) komprehensif dari Shangtel dapat mengubah operasional Anda, meningkatkan keamanan, dan mendorong pertumbuhan yang tak tertandingi.",
    cta: "Pelajari Lebih Lanjut",
    serviceTypeLabel: "MENU LAYANAN",
    services: [
      {
        title: "Managed IT Services & Dukungan 24/7",
        subtitle:
          "Pengelolaan Infrastruktur Secara Profesional dan Berkelanjutan",
        description:
          "Kami menyediakan layanan pengelolaan sistem IT secara menyeluruh, mulai dari maintenance, troubleshooting, hingga optimalisasi performa. Layanan bantuan teknis siaga 24/7 kami memastikan operasional bisnis berjalan stabil tanpa gangguan.",
        points: [
          "Monitoring & Support 24/7",
          "Preventive Maintenance",
          "Optimalisasi Sistem",
          "Technical Support Enterprise",
        ],
        icon: "headset",
        image: "s1.jpeg",
      },
      {
        title: "Cyber Security & Perlindungan Data",
        subtitle: "Perlindungan Maksimal untuk Aset Digital Anda",
        description:
          "Keamanan adalah prioritas utama. Kami menghadirkan solusi keamanan berlapis untuk melindungi jaringan, sistem, dan data strategis perusahaan dari ancaman siber. Sistem pemantauan proaktif kami melindungi aset digital Anda.",
        points: [
          "Firewall & Network Security",
          "Enkripsi Data",
          "Deteksi & Mitigasi Ancaman",
          "Pemantauan Keamanan",
        ],
        icon: "shield-halved",
        image: "s2.jpeg",
      },
      {
        title: "Infrastruktur IT & Desain Jaringan",
        subtitle: "Arsitektur Sistem yang Tangguh dan Scalable",
        description:
          "Perencanaan dan implementasi infrastruktur IT yang dirancang sesuai kebutuhan bisnis Anda, dengan standar enterprise dan kesiapan ekspansi jangka panjang. Kami merancang arsitektur yang efisien dan modern.",
        points: [
          "Desain Arsitektur Jaringan",
          "Fiber Optik & Structured Cabling",
          "Integrasi Sistem",
          "Infrastruktur Terukur",
        ],
        icon: "network-wired",
        image: "s3.jpeg",
      },
      {
        title: "Solusi Internet Service Provider (ISP)",
        subtitle: "Koneksi Stabil, Cepat, dan Andal",
        description:
          "Sebagai penyedia layanan internet, Shangtel memastikan konektivitas bisnis Anda tetap stabil dengan dukungan teknis profesional dan SLA yang terukur. Solusi berbasis fiber optik untuk konektivitas masa depan.",
        points: [
          "Internet Dedicated",
          "Broadband Korporasi",
          "Link Cadangan & Redundansi",
          "Jaminan SLA",
        ],
        icon: "wifi",
        image: "s4.jpeg",
      },
      {
        title: "Solusi Server & Penyimpanan",
        subtitle: "Infrastruktur Data yang Aman dan Cepat",
        description:
          "Layanan penyediaan, pengelolaan, dan pengoptimalan infrastruktur server serta penyimpanan data yang aman dan cepat. Kami memastikan data Anda selalu dapat diakses dan terlindungi dengan teknologi penyimpanan terbaru.",
        points: [
          "Server Cloud & Fisik",
          "Solusi Backup Data",
          "Penyimpanan Performa Tinggi",
          "Optimalisasi Server",
        ],
        icon: "database",
        image: "s5.jpeg",
      },
      {
        title: "Sistem IT Enterprise",
        subtitle: "Solusi Berorientasi Bisnis Skala Besar",
        description:
          "Pengembangan sistem IT terpadu berskala perusahaan yang dirancang untuk efisiensi dan skalabilitas bisnis jangka panjang. Kami membantu merampingkan proses bisnis dengan software kustom dan integrasi sistem.",
        points: [
          "Integrasi ERP & CRM",
          "Pengembangan Software Kustom",
          "Otomasi Alur Kerja",
          "Skalabilitas Perusahaan",
        ],
        icon: "server",
        image: "s6.jpeg",
      },
      {
        title: "Solusi Multimedia & Visual",
        subtitle: "Multimedia Interaktif Modern",
        description:
          "Integrasi solusi multimedia modern, mulai dari videotron hingga sistem audio visual interaktif untuk publikasi yang memukau. Kami memberikan pengalaman visual berkualitas tinggi untuk komunikasi korporat dan publik.",
        points: [
          "Videotron & Layar LED",
          "Sistem AV Interaktif",
          "Solusi Digital Signage",
          "Integrasi Multimedia",
        ],
        icon: "desktop",
        image: "s7.jpeg",
      },
      {
        title: "Konsultasi IT Strategis",
        subtitle: "Blueprinting Teknologi oleh Para Ahli",
        description:
          "Layanan konsultasi strategis oleh para ahli untuk membantu Anda merancang blueprint teknologi yang tepat bagi bisnis. Kami memberikan wawasan dan rekomendasi untuk menyelaraskan strategi IT dengan tujuan bisnis.",
        points: [
          "Pengembangan Roadmap IT",
          "Transformasi Digital",
          "Asesmen Teknologi",
          "Optimalisasi Biaya",
        ],
        icon: "user-tie",
        image: "s8.jpeg",
      },
    ],
  },
};

const currentContent = computed(() => {
  return currentLanguage.value === "ID" ? servicesData.id : servicesData.en;
});

const getImageUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href;
};


const getWhatsAppLink = (serviceTitle) => {
  const number = "628114499096";
  const lang = currentLanguage.value;
  const message =
    lang === "ID"
      ? `Halo, saya ingin bertanya mengenai layanan "${serviceTitle}".`
      : `Hello, I would like to inquire about the "${serviceTitle}" service.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
</script>

<style scoped>
</style>
