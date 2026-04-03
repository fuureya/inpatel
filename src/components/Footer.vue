<template>
  <footer class="footer-section bg-zinc-900 text-white relative transition-colors duration-300">
    <!-- Map Background -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full bg-inpatel-primary/20 bg-cover bg-center bg-no-repeat"
      ></div>
    </div>

    <!-- Main Footer Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-white mb-6 border-l-4 border-inpatel-primary pl-4">{{ currentFooterData.managedServices }}</h3>
            <nav class="grid grid-cols-2 gap-x-4 gap-y-3">
              <router-link to="/" class="footer-link">{{ currentFooterData.nav.home }}</router-link>
              <router-link to="/tentang-kami" class="footer-link">{{ currentFooterData.nav.about }}</router-link>
              <router-link to="/services" class="footer-link">{{ currentFooterData.nav.services }}</router-link>
              <router-link :to="{ path: '/', hash: '#contact' }" class="footer-link">{{ currentFooterData.nav.contact }}</router-link>
            </nav>
          </div>

          <!-- Social Media -->
          <div class="pt-4">
            <h4 class="text-lg font-bold text-white mb-4">{{ currentFooterData.followUs }}</h4>
            <div class="flex space-x-4">
              <a href="#" class="social-icon">
                <font-awesome-icon :icon="['fab', 'twitter']" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Middle Grid - Contact Info -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-white mb-6 border-l-4 border-inpatel-primary pl-4">{{ currentFooterData.contactInfo }}</h3>

          <div class="space-y-4 text-white">
            <!-- Address -->
            <div class="flex items-start space-x-3">
              <div class="contact-icon bg-inpatel-primary">
                <font-awesome-icon icon="location-dot" class="w-5 h-5" />
              </div>
              <div>
                <p class="leading-relaxed">Jl. Malibela KM 11,5<br>Desa/Kelurahan Klawalu, Kec. Sorong Timur<br>Kota Sorong, Provinsi Papua Barat Daya - Indonesia</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon bg-inpatel-primary">
                <font-awesome-icon icon="phone" class="w-5 h-5" />
              </div>
               <p>081144406726</p>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon bg-inpatel-primary">
                <font-awesome-icon icon="envelope" class="w-5 h-5" />
              </div>
              <p>noc@inpatel.co.id</p>
            </div>
          </div>
        </div>

        <!-- Right Grid - Contact Form -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-white mb-6 border-l-4 border-inpatel-primary pl-4">{{ currentFooterData.getInTouch }}</h3>

          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Full Name -->
            <div>
              <label for="fullname" class="block text-sm font-medium text-white mb-2">
                {{ currentFooterData.form.name }}
              </label>
              <input
                id="fullname"
                v-model="form.fullname"
                type="text"
                required
                class="form-input"
                :placeholder="currentFooterData.form.namePlaceholder"
              />
            </div>

            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-white mb-2">
                {{ currentFooterData.form.company }}
              </label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                required
                class="form-input"
                :placeholder="currentFooterData.form.companyPlaceholder"
              />
            </div>

            <!-- Question -->
            <div>
              <label for="question" class="block text-sm font-medium text-white mb-2">
                {{ currentFooterData.form.question }}
              </label>
              <textarea
                id="question"
                v-model="form.question"
                rows="4"
                required
                class="form-input resize-none"
                :placeholder="currentFooterData.form.questionPlaceholder"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-button group w-full">
              <span class="relative z-10 flex items-center justify-center">
                {{ currentFooterData.form.submit }}
                <font-awesome-icon
                  icon="paper-plane"
                  class="ml-2 transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white">
          <div class="flex items-center space-x-3">
            <img src="@/assets/img/inpatel.png" alt="Inpatel" class="h-8 w-auto brightness-0 invert" />
            <p class="text-sm">
              © 2024 Inpatel. All rights reserved.
            </p>
          </div>
          <div class="flex space-x-6 text-sm text-white">
            <a href="#" class="hover:text-inpatel-primary transition-colors">{{ currentFooterData.privacyPolicy }}</a>
            <a href="#" class="hover:text-inpatel-primary transition-colors">{{ currentFooterData.termsOfService }}</a>
            <a href="#" class="hover:text-inpatel-primary transition-colors">{{ currentFooterData.sitemap }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const { currentLanguage } = useLanguage()

const footerDataIndonesia = {
  managedServices: "Layanan Terkelola",
  followUs: "Ikuti Kami",
  contactInfo: "Info Kontak",
  getInTouch: "Hubungi Kami",
  nav: {
    home: "Beranda",
    about: "Tentang",
    services: "Layanan",
    contact: "Kontak"
  },
  form: {
    name: "Nama Lengkap",
    namePlaceholder: "Masukkan nama lengkap Anda",
    company: "Perusahaan",
    companyPlaceholder: "Masukkan nama perusahaan Anda",
    question: "Pertanyaan Anda",
    questionPlaceholder: "Apa yang bisa kami bantu?",
    submit: "Kirim Pesan"
  },
  privacyPolicy: "Kebijakan Privasi",
  termsOfService: "Syarat Layanan",
  sitemap: "Peta Situs"
}

const footerDataEnglish = {
  managedServices: "Managed Services",
  followUs: "Follow Us",
  contactInfo: "Contact Info",
  getInTouch: "Get In Touch",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact"
  },
  form: {
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    company: "Company",
    companyPlaceholder: "Enter your company name",
    question: "Your Question",
    questionPlaceholder: "How can we help you?",
    submit: "Send Message"
  },
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
  sitemap: "Sitemap"
}

const currentFooterData = computed(() => {
  return currentLanguage.value === 'ID' ? footerDataIndonesia : footerDataEnglish
})

const form = ref({
  fullname: '',
  company: '',
  question: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)

  // Create WhatsApp message
  const lang = currentLanguage.value
  const intro = lang === 'ID' 
    ? `Halo saya ${form.value.fullname} berasal dari ${form.value.company}.` 
    : `Hello, I am ${form.value.fullname} from ${form.value.company}.`
  
  const message = `${intro} ${form.value.question}`
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/6281144406726?text=${encodedMessage}`

  // Open WhatsApp
  window.open(whatsappUrl, '_blank')

  // Reset form
  form.value = {
    fullname: '',
    company: '',
    question: ''
  }
}
</script>

<style scoped>
.footer-section {
  background: #18181b !important; /* Force dark background */
  color: #ffffff !important; /* Force white text */
  position: relative;
  overflow: hidden;
}

.footer-section h3, 
.footer-section h4,
.footer-section p,
.footer-section span,
.footer-section label,
.footer-section div {
  color: #ffffff !important;
}

.footer-link {
  display: block;
  color: #ffffff !important;
  font-weight: 500;
  transition: all 0.2s;
  padding: 0.25rem 0;
}

.footer-link:hover {
  color: var(--inpatel-primary);
  transform: translateX(4px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 50%;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
  background-color: var(--inpatel-primary);
  color: white;
  transform: translateY(-2px);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: white;
  border-radius: 8px;
  flex-shrink: 0;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.07);
  color: white;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.form-input::placeholder {
  color: #ffffff !important; /* pure white for placeholder */
  opacity: 0.7 !important;
}

.form-input:focus {
  outline: none;
  border-color: var(--inpatel-primary);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 4px rgba(16, 103, 143, 0.15);
}

.submit-button {
  position: relative;
  background-color: var(--inpatel-primary);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 14px rgba(16, 103, 143, 0.3);
  overflow: hidden;
}

.submit-button:hover {
  background-color: var(--inpatel-dark);
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(16, 103, 143, 0.4);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    gap: 2rem;
  }
}
</style>