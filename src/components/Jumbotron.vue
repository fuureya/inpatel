<template>
    <section class="relative min-h-screen overflow-hidden bg-black">
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black/20 z-10"></div>

        <!-- Carousel Container -->
        <div class="relative h-screen w-full">
            <!-- Carousel Items -->
            <div v-for="(slide, index) in carouselData" :key="index"
                class="absolute inset-0 transition-all duration-1000 ease-in-out" :class="{
                    'opacity-100 translate-x-0': currentSlide === index,
                    'opacity-0 translate-x-full': currentSlide !== index && index > currentSlide,
                    'opacity-0 -translate-x-full': currentSlide !== index && index < currentSlide
                }">
                <!-- Background Image -->
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    :style="{ backgroundImage: `url(${slide.image})` }">
                    <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>

                <!-- Content -->
                <div class="relative z-20 flex items-center h-full">
                    <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                        <div class="max-w-3xl">
                            <!-- Badge -->
                            <div
                                class="inline-flex items-center px-4 py-2 rounded-lg bg-inpatel-primary text-white mb-6 uppercase tracking-widest text-xs font-black">
                                <span>{{ slide.badge }}</span>
                            </div>

                            <!-- Main Title -->
                            <h1 class="text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                                {{ slide.title }}
                            </h1>

                            <!-- Subtitle -->
                            <p class="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed font-medium">
                                {{ slide.subtitle }}
                            </p>

                            <!-- CTA Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4">
                                <a href="https://wa.me/6281144406726?text=Halo%20saya%20ingin%20konsultasi%20tentang%20layanan%20Inpatel" target="_blank" class="cta-primary cta-highlight cta-pulse cta-shimmer group">
                                    <span class="relative z-10 flex items-center justify-center">
                                        Get Started
                                        <font-awesome-icon
                                            icon="arrow-right"
                                            class="ml-2 transition-transform group-hover:translate-x-1"
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Dots -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div class="flex space-x-3">
                <button v-for="(slide, index) in carouselData" :key="index" @click="currentSlide = index"
                    class="w-3 h-3 rounded-full transition-all duration-300" :class="{
                        'bg-white scale-125': currentSlide === index,
                        'bg-white/50 hover:bg-white/75': currentSlide !== index
                    }"></button>
            </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide" class="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 nav-arrow group">
            <font-awesome-icon icon="chevron-left" class="h-6 w-6" />
        </button>

        <button @click="nextSlide" class="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 nav-arrow group">
            <font-awesome-icon icon="chevron-right" class="h-6 w-6" />
        </button>


    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

// Props to detect if this is carrier page
const props = defineProps({
  isCarrierPage: {
    type: Boolean,
    default: false
  }
})

const carouselDataEnglish = [
    {
        id: 1,
        badge: "Vision & Identity",
        title: "Connecting Indonesia’s Digital Future",
        subtitle: "PT Integra Palapa Telekomunikasi: Delivering reliable, innovative, and sustainable connectivity solutions.",
        image: "@\/assets\/img\/hero-1.png"
    },
    {
        id: 2,
        badge: "Our Core Services",
        title: "Integrated Telecom Infrastructure & Solutions",
        subtitle: "From network construction to infrastructure management, we provide the foundation for digital transformation.",
        image: "@\/assets\/img\/hero-2.png"
    },
    {
        id: 3,
        badge: "Excellence & Trust",
        title: "Your Strategic Partner in Telecommunications",
        subtitle: "Building smart, secure, and future-ready systems for businesses and communities across Indonesia.",
        image: "@\/assets\/img\/hero-3.png"
    }
];

const carrierCarouselDataEnglish = [
    {
        id: 1,
        badge: "Carrier Services",
        title: "National Telecommunications Ecosystem",
        subtitle: "Strategic partnership and infrastructure solutions for a more connected Indonesia.",
        image: "@/assets/img/service4.jpg"
    },
    {
        id: 2,
        badge: "Professional Growth",
        title: "Build the Future With Inpatel",
        subtitle: "Join our team of experts in driving digital transformation and technological innovation.",
        image: "@/assets/img/service5.jpg"
    }
];

const carouselDataIndonesia = [
    {
        id: 1,
        badge: "Visi & Identitas",
        title: "Menghubungkan Masa Depan Digital Indonesia",
        subtitle: "PT Integra Palapa Telekomunikasi: Menghadirkan solusi konektivitas yang andal, inovatif, dan berkelanjutan.",
        image: "/src/assets/img/hero-1.png"
    },
    {
        id: 2,
        badge: "Layanan Utama Kami",
        title: "Infrastruktur & Solusi Telekomunikasi Terintegrasi",
        subtitle: "Dari pembangunan jaringan hingga pengelolaan infrastruktur, kami menjadi fondasi transformasi digital.",
        image: "/src/assets/img/hero-2.png"
    },
    {
        id: 3,
        badge: "Keunggulan & Kepercayaan",
        title: "Mitra Strategis Anda di Bidang Telekomunikasi",
        subtitle: "Membangun sistem yang cerdas, aman, dan siap untuk masa depan bagi bisnis dan masyarakat di seluruh Indonesia.",
        image: "/src/assets/img/hero-3.png"
    }
]

const carrierCarouselDataIndonesia = [
    {
        id: 1,
        badge: "Layanan Carrier",
        title: "Ekosistem Telekomunikasi Nasional",
        subtitle: "Kemitraan strategis dan solusi infrastruktur untuk Indonesia yang lebih terkoneksi.",
        image: "@/assets/img/service4.jpg"
    },
    {
        id: 2,
        badge: "Pengembangan Profesional",
        title: "Bangun Masa Depan Bersama Inpatel",
        subtitle: "Bergabunglah dengan tim ahli kami dalam mendorong transformasi digital dan inovasi teknologi.",
        image: "@/assets/img/service5.jpg"
    }
]

const { currentLanguage } = useLanguage()

// Computed property to get the right carousel data based on language and page
const carouselData = computed(() => {
    if (props.isCarrierPage) {
        return currentLanguage.value === 'ID' ? carrierCarouselDataIndonesia : carrierCarouselDataEnglish
    }
    return currentLanguage.value === 'ID' ? carouselDataIndonesia : carouselDataEnglish
})

const currentSlide = ref(0)
let autoplayInterval = null

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % carouselData.value.length
}

const prevSlide = () => {
    currentSlide.value = currentSlide.value === 0 ? carouselData.value.length - 1 : currentSlide.value - 1
}

const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
    if (autoplayInterval) {
        clearInterval(autoplayInterval)
        autoplayInterval = null
    }
}

onMounted(() => {
    startAutoplay()
})

onUnmounted(() => {
    stopAutoplay()
})
</script>

<style scoped>
/* CTA Buttons */
.cta-primary {
    position: relative;
    background-color: var(--inpatel-primary);
    color: white;
    padding: 1.25rem 2.5rem;
    border-radius: 0.5rem;
    font-weight: 900;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(16, 103, 143, 0.3);
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
}

.cta-primary:hover {
    transform: translateY(-2px);
    background-color: var(--inpatel-dark);
    box-shadow: 0 20px 40px rgba(16, 103, 143, 0.4);
}

.cta-secondary {
    position: relative;
    background: transparent;
    border: 2px solid white;
    color: white;
    padding: 1.25rem 2.5rem;
    border-radius: 0.5rem;
    font-weight: 900;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.cta-secondary:hover {
    background: white;
    color: black;
    transform: translateY(-2px);
}

/* Navigation Arrows */
.nav-arrow {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.75rem;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.7;
}

.nav-arrow:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    opacity: 1;
    transform: scale(1.05);
}

/* Smooth slide transitions */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

/* Typography animations */
h1 {
    animation: slideInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    color: #ffffff !important;
}

p {
    animation: slideInUp 1.4s cubic-bezier(0.4, 0, 0.2, 1);
    color: #ffffff !important;
}

.cta-primary,
.cta-secondary {
    animation: slideInUp 1.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(60px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {

    .cta-primary,
    .cta-secondary {
        width: 100%;
        text-align: center;
        padding: 0.875rem 1.5rem;
        font-size: 1rem;
    }

    .nav-arrow {
        padding: 0.5rem;
        opacity: 0.8;
    }

    h1 {
        font-size: 2.5rem !important;
        line-height: 1.1;
    }

    p {
        font-size: 1.125rem !important;
    }
}

/* Badge animation */
.inline-flex {
    border-left: 4px solid var(--inpatel-primary);
    padding-left: 1rem;
    color: #ffffff !important;
}

/* Scroll indicator animation */
.writing-mode-vertical {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
}

/* Parallax effect for background images */
.bg-cover {
    transition: transform 8s ease-out;
}

.bg-cover:hover {
    transform: scale(1.05);
}
</style>
