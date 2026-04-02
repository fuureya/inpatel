<template>
  <footer class="footer-section bg-zinc-900 text-white relative transition-colors duration-300">
    <!-- Map Background -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full bg-cover bg-center bg-no-repeat"
        style="background-image: url('/img/map.png')"
      ></div>
    </div>

    <!-- Main Footer Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- Left Grid - Navigation & Services -->
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-white mb-6 border-l-4 border-telkom-red pl-4">{{ currentFooterData.managedServices }}</h3>
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
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Middle Grid - Contact Info -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-white mb-6 border-l-4 border-telkom-red pl-4">{{ currentFooterData.contactInfo }}</h3>

          <div class="space-y-4 text-white">
            <!-- Address -->
            <div class="flex items-start space-x-3">
              <div class="contact-icon bg-telkom-red">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="leading-relaxed">Jl. Keindahan 1 Blok AA No.4<br>Tamalanrea - Makassar<br>Sulawesi - Indonesia</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon bg-telkom-red">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p>08114499096</p>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-3">
              <div class="contact-icon bg-telkom-red">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p>support@shangtel.co.id</p>
            </div>
          </div>
        </div>

        <!-- Right Grid - Contact Form -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-white mb-6 border-l-4 border-telkom-red pl-4">{{ currentFooterData.getInTouch }}</h3>

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
                <svg class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
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
            <img src="/img/shangtel.png" alt="Shangtel" class="h-8 w-auto brightness-0 invert" />
            <p class="text-sm">
              © 2024 Shangtel. All rights reserved.
            </p>
          </div>
          <div class="flex space-x-6 text-sm text-white">
            <a href="#" class="hover:text-telkom-red transition-colors">{{ currentFooterData.privacyPolicy }}</a>
            <a href="#" class="hover:text-telkom-red transition-colors">{{ currentFooterData.termsOfService }}</a>
            <a href="#" class="hover:text-telkom-red transition-colors">{{ currentFooterData.sitemap }}</a>
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
  const whatsappUrl = `https://wa.me/6208114499096?text=${encodedMessage}`

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
  color: #E42313;
  transform: translateX(4px);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-radius: 50%;
  transition: all 0.3s;
}

.social-icon:hover {
  background: #E42313;
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
  border-color: #E42313;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 4px rgba(228, 35, 19, 0.15);
}

.submit-button {
  position: relative;
  background: #E42313;
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 14px rgba(228, 35, 19, 0.3);
  overflow: hidden;
}

.submit-button:hover {
  background: #C31E10;
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(228, 35, 19, 0.4);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid {
    gap: 2rem;
  }
}
</style>