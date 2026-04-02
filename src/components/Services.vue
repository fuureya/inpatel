<template>
    <section id="services" class="py-24 bg-gray-50 dark:bg-zinc-900 relative overflow-hidden transition-colors duration-300">
        <!-- Minimalist Background -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-20">
                <div
                    class="inline-flex items-center px-4 py-2 rounded-lg bg-telkom-red/10 text-telkom-red text-xs font-black uppercase tracking-widest mb-6">
                    {{ currentServicesData.badge }}
                </div>
                <h2 class="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                    {{ currentServicesData.title }}
                </h2>
                <p class="text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium">
                    {{ currentServicesData.subtitle }}
                </p>

                <!-- Stats Row -->
                <div ref="statsRef" class="flex justify-center items-center space-x-12 mt-12">
                    <div class="text-center">
                        <div class="text-3xl font-black text-telkom-red">24/7</div>
                        <div class="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Support</div>
                    </div>
                    <div class="w-px h-10 bg-gray-200 dark:bg-zinc-800"></div>
                    <div class="text-center">
                        <div class="text-3xl font-black text-gray-900 dark:text-white">{{ formatUptime(animatedUptime) }}%</div>
                        <div class="text-xs text-gray-400 dark:text-zinc-500 uppercase font-bold tracking-widest mt-1">Uptime</div>
                    </div>
                    <div class="w-px h-10 bg-gray-200 dark:bg-zinc-800"></div>
                    <div class="text-center">
                        <div class="text-3xl font-black text-gray-900 dark:text-white">{{ formatClients(animatedClients) }}+</div>
                        <div class="text-xs text-gray-400 dark:text-zinc-500 uppercase font-bold tracking-widest mt-1">Clients</div>
                    </div>
                </div>
            </div>

            <!-- Modern Services Carousel with Swiper -->
            <swiper-container v-bind="swiperParams" init="false" class="w-full">
                <swiper-slide v-for="(service, index) in currentServicesData.services" :key="index" class="h-full p-4">
                    <!-- Service Card -->
                    <div
                        class="group relative h-[450px] w-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        
                        <!-- Image Container -->
                        <div class="h-48 overflow-hidden">
                            <img :src="getImageUrl(service.image)" :alt="service.title" 
                                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>

                        <!-- Content -->
                        <div class="p-8">
                            <div class="flex items-center space-x-4 mb-4">
                                <div class="w-12 h-12 rounded-lg bg-telkom-red flex items-center justify-center text-white shadow-lg shadow-telkom-red/20">
                                    <font-awesome-icon :icon="getIconName(service.icon)" class="text-xl" />
                                </div>
                                <h3 class="text-xl font-black text-gray-900 dark:text-white leading-tight">
                                    {{ service.title }}
                                </h3>
                            </div>
                            
                            <p class="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                                {{ service.description }}
                            </p>

                            <div class="flex items-center text-telkom-red text-xs font-black uppercase tracking-widest pt-4 border-t border-gray-50 dark:border-zinc-800">
                                <span>Explore Service</span>
                                <font-awesome-icon icon="arrow-right" class="ml-2 transition-transform group-hover:translate-x-2" />
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

// Swiper parameters
const swiperParams = {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: false,
        },
    },
};


// Stats animation state
const statsRef = ref(null)
const animatedUptime = ref(0)
const animatedClients = ref(0)
const isStatsVisible = ref(false)
let statsObserver = null

// Stats animation functions
const animateStats = () => {
    if (!isStatsVisible.value) return

    // Reset stats
    animatedUptime.value = 0
    animatedClients.value = 0

    // Animate uptime to 99.9
    const uptimeTarget = 99.9
    const uptimeDuration = 2000
    const uptimeIncrement = uptimeTarget / (uptimeDuration / 16)

    const uptimeAnimation = () => {
        if (animatedUptime.value < uptimeTarget && isStatsVisible.value) {
            animatedUptime.value = Math.min(animatedUptime.value + uptimeIncrement, uptimeTarget)
            requestAnimationFrame(uptimeAnimation)
        }
    }

    // Animate clients to 500
    const clientsTarget = 500
    const clientsDuration = 2500
    const clientsIncrement = clientsTarget / (clientsDuration / 16)

    const clientsAnimation = () => {
        if (animatedClients.value < clientsTarget && isStatsVisible.value) {
            animatedClients.value = Math.min(animatedClients.value + clientsIncrement, clientsTarget)
            requestAnimationFrame(clientsAnimation)
        }
    }

    // Start animations with slight delay
    setTimeout(uptimeAnimation, 200)
    setTimeout(clientsAnimation, 400)
}

const setupStatsObserver = () => {
    statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isStatsVisible.value = true
                    animateStats()
                } else {
                    isStatsVisible.value = false
                }
            })
        },
        {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        }
    )

    if (statsRef.value) {
        statsObserver.observe(statsRef.value)
    }
}

const formatUptime = (num) => {
    return num.toFixed(1)
}

const formatClients = (num) => {
    return Math.floor(num).toString()
}

onMounted(() => {
    setupStatsObserver()
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
    }
})

onUnmounted(() => {
    if (statsObserver && statsRef.value) {
        statsObserver.unobserve(statsRef.value)
    }
})

const servicesData = [
    {
        lang: "id",
        title: "Dukungan 24 Jam",
        description: "Layanan bantuan teknis siaga 24/7 untuk memastikan kelancaran operasional bisnis Anda tanpa henti, kapanpun dibutuhkan.",
        icon: "headset",
        image: "s1.jpeg"
    },
    {
        lang: "id",
        title: "Fiber Optic Network",
        description: "Solusi jaringan internet berkecepatan tinggi berbasis fiber optik yang stabil dan handal untuk konektivitas masa depan.",
        icon: "network-wired",
        image: "s2.jpeg"
    },
    {
        lang: "id",
        title: "Enterprise Sistem IT",
        description: "Pengembangan sistem IT terpadu berskala perusahaan yang dirancang untuk efisiensi dan skalabilitas bisnis jangka panjang.",
        icon: "server",
        image: "s3.jpeg"
    },
    {
        lang: "id",
        title: "Server & Storage",
        description: "Layanan penyediaan, pengelolaan, dan pengoptimalan infrastruktur server serta penyimpanan data yang aman dan cepat.",
        icon: "database",
        image: "s4.jpeg"
    },
    {
        lang: "id",
        title: "Security & Monitoring",
        description: "Sistem keamanan siber dan pemantauan infrastruktur yang proaktif untuk melindungi aset digital Anda dari ancaman luar.",
        icon: "shield-halved",
        image: "s5.jpeg"
    },
    {
        lang: "id",
        title: "Multimedia Solutions",
        description: "Integrasi solusi multimedia modern, mulai dari videotron hingga sistem audio visual interaktif untuk publikasi yang memukau.",
        icon: "desktop",
        image: "s6.jpeg"
    },
    {
        lang: "id",
        title: "Konsultan IT",
        description: "Layanan konsultasi strategis oleh para ahli untuk membantu Anda merancang blueprint teknologi yang tepat bagi bisnis.",
        icon: "user-tie",
        image: "s7.jpeg"
    },
    {
        lang: "id",
        title: "Desain IT",
        description: "Perancangan arsitektur sistem dan desain infrastruktur digital yang efisien, modern, serta tepat guna.",
        icon: "lightbulb",
        image: "s8.jpeg"
    },
    // English Version fallback
    {
        lang: "en",
        title: "24/7 Support",
        description: "24/7 standby technical assistance to ensure smooth business operations without interruption, whenever needed.",
        icon: "headset",
        image: "s1.jpeg"
    },
    {
        lang: "en",
        title: "Fiber Optic Network",
        description: "High-speed, stable, and reliable fiber optic-based internet network solutions for future connectivity.",
        icon: "network-wired",
        image: "s2.jpeg"
    },
    {
        lang: "en",
        title: "Enterprise IT Systems",
        description: "Development of integrated enterprise-scale IT systems designed for long-term business efficiency and scalability.",
        icon: "server",
        image: "s3.jpeg"
    },
    {
        lang: "en",
        title: "Server & Storage",
        description: "Provision, management, and optimization services for secure and fast server infrastructure and data storage.",
        icon: "database",
        image: "s4.jpeg"
    },
    {
        lang: "en",
        title: "Security & Monitoring",
        description: "Proactive cybersecurity and infrastructure monitoring systems to protect your digital assets from external threats.",
        icon: "shield-halved",
        image: "s5.jpeg"
    },
    {
        lang: "en",
        title: "Multimedia Solutions",
        description: "Integration of modern multimedia solutions, from videotron to interactive audio-visual systems for stunning publications.",
        icon: "desktop",
        image: "s6.jpeg"
    },
    {
        lang: "en",
        title: "IT Consultant",
        description: "Strategic consulting services by experts to help you design the right technology blueprint for your business.",
        icon: "user-tie",
        image: "s7.jpeg"
    },
    {
        lang: "en",
        title: "IT Design",
        description: "Architecture system design and digital infrastructure design that is efficient, modern, and effective.",
        icon: "lightbulb",
        image: "s8.jpeg"
    }
];


const servicesDataIndonesia = {
    badge: "Layanan Unggulan",
    title: "Solusi IT & Infrastruktur Modern",
    subtitle: "Kami menghadirkan layanan IT komprehensif mulai dari jaringan fiber optik hingga sistem keamanan tingkat perusahaan untuk mendukung transformasi digital Anda.",
    services: servicesData.filter(service => service.lang === 'id')
}

const servicesDataEnglish = {
    badge: "Premier Services",
    title: "Modern IT & Infrastructure Solutions",
    subtitle: "We provide comprehensive IT services from fiber optic networks to enterprise-level security systems to support your digital transformation.",
    services: servicesData.filter(service => service.lang === 'en')
}

const currentServicesData = computed(() => {
    return currentLanguage.value === 'ID' ? servicesDataIndonesia : servicesDataEnglish
})

// Helper function to get image URL
const getImageUrl = (name) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href
}


// Helper function to get icon name without prefix
const getIconName = (iconString) => {
    return iconString
}

</script>

<style>
/* Custom Swiper Styles */
swiper-container {
    width: 100%;
    height: 100%;
    padding-bottom: 50px; /* Space for pagination */
}

swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
}

/* Custom animations */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.float-animation {
    animation: float 3s ease-in-out infinite;
}

/* Card hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

/* Button hover effects */
.group\/btn:hover .group-hover\/btn\:translate-x-1 {
    transform: translateX(0.25rem);
}

.group\/btn:hover .group-hover\/btn\:opacity-100 {
    opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .text-4xl {
        font-size: 2rem;
    }

    .lg\:text-5xl {
        font-size: 2.5rem;
    }

    .p-8 {
        padding: 1.5rem;
    }

    .text-2xl {
        font-size: 1.5rem;
    }
}

/* Smooth transitions */
* {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>