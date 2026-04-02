<template>
  <nav class="modern-navbar bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center  h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <router-link to="/" class="flex items-center space-x-3">
            <img class="h-10 w-auto hidden sm:block" src="/img/shangtel.png" alt="Shangtel" />
            <img class="h-8 w-auto sm:hidden" src="/img/shangtel-mb.png" alt="Shangtel" />
          </router-link>
        </div>

        <!-- Menu Items -->
        <div class="hidden lg:flex flex-1 justify-center ml-40">
          <div class="flex items-center ">
            <router-link :to="{ path: '/', hash: '#home' }" class="nav-link"
              :class="{ 'active': isLinkActive('home') }">
              {{ currentNavData.home }}
            </router-link>
            <router-link to="/tentang-kami" class="nav-link" :class="{ 'active': isLinkActive('/tentang-kami') }">
              {{ currentNavData.about }}
            </router-link>
            <router-link to="/services" class="nav-link" :class="{ 'active': isLinkActive('/services') }">
              {{ currentNavData.services }}
            </router-link>

            <router-link :to="{ path: '/', hash: '#products' }" class="nav-link"
              :class="{ 'active': isLinkActive('products') }">
              {{ currentNavData.products }}
            </router-link>

            <router-link to="/carrier" class="nav-link" :class="{ 'active': isLinkActive('/carrier') }">
              {{ currentNavData.carrier }}
            </router-link>
            <router-link :to="{ path: '/', hash: '#contact' }" class="nav-link"
              :class="{ 'active': isLinkActive('contact') }">
              {{ currentNavData.contact }}
            </router-link>
          </div>
        </div>

        <!-- Actions -->
        <div class="hidden lg:flex items-center space-x-6">
          <!-- Theme Toggle -->
          <button
            @click="toggleDark"
            class="theme-toggle-button"
            aria-label="Toggle Theme"
          >
            <div class="toggle-circle"></div>
            <div class="theme-icons">
              <font-awesome-icon icon="sun" />
              <font-awesome-icon icon="moon" />
            </div>
          </button>

          <!-- Language Selector -->
          <div class="relative">
            <button
              @click="isLangOpen = !isLangOpen"
              class="flex items-center space-x-2 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-4 py-2 rounded-lg hover:border-telkom-red transition-all duration-300"
            >
              <font-awesome-icon icon="globe" class="text-gray-400 dark:text-zinc-500" />
              <span class="text-sm font-bold text-gray-700 dark:text-zinc-300">{{ currentLanguage }}</span>
              <font-awesome-icon
                icon="chevron-down"
                class="text-[10px] text-gray-400 transition-transform duration-300"
                :class="{ 'rotate-180': isLangOpen }"
              />
            </button>
            
            <!-- Desktop Language Dropdown -->
            <div v-if="isLangOpen" 
              class="absolute right-0 mt-2 w-32 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-2xl py-2 z-50 transition-all duration-200"
            >
              <button 
                @click="setLanguage('ID'); isLangOpen = false"
                class="flex items-center w-full px-4 py-2 text-sm font-bold text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                :class="{ 'text-telkom-red': currentLanguage === 'ID' }"
              >
                Indonesia
              </button>
              <button 
                @click="setLanguage('ENG'); isLangOpen = false"
                class="flex items-center w-full px-4 py-2 text-sm font-bold text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                :class="{ 'text-telkom-red': currentLanguage === 'ENG' }"
              >
                English
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-menu-button group">
            <div class="hamburger-line" :class="{ 'hamburger-active': mobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="mobile-menu lg:hidden">
      <div class="px-6 py-4 space-y-1">
        <router-link :to="{ path: '/', hash: '#home' }" @click="mobileMenuOpen = false" class="mobile-nav-link"
          :class="{ 'active': isLinkActive('home') }">
          {{ currentNavData.home }}
        </router-link>
        <router-link to="/tentang-kami" @click="mobileMenuOpen = false" class="mobile-nav-link"
          :class="{ 'active': isLinkActive('/tentang-kami') }">
          {{ currentNavData.about }}
        </router-link>
        <router-link to="/services" @click="mobileMenuOpen = false" class="mobile-nav-link"
          :class="{ 'active': isLinkActive('/services') }">
          {{ currentNavData.services }}
        </router-link>

        <router-link :to="{ path: '/', hash: '#products' }" @click="mobileMenuOpen = false" class="mobile-nav-link"
          :class="{ 'active': isLinkActive('products') }">
          {{ currentNavData.products }}
        </router-link>
        <router-link to="/carrier" @click="mobileMenuOpen = false" class="mobile-nav-link"
          :class="{ 'active': isLinkActive('/carrier') }">
          {{ currentNavData.carrier }}
        </router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" @click="mobileMenuOpen = false" class="mobile-nav-link"
          :class="{ 'active': isLinkActive('contact') }">
          {{ currentNavData.contact }}
        </router-link>
      </div>

      <div class="px-6 py-4 space-y-4 border-t border-gray-100 dark:border-zinc-800">
        <!-- Mobile Theme Toggle -->
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-gray-700 dark:text-zinc-300">Theme</span>
          <button
            @click="toggleDark"
            class="theme-toggle-button scale-90"
            aria-label="Toggle Theme"
          >
            <div class="toggle-circle"></div>
            <div class="theme-icons">
              <font-awesome-icon icon="sun" />
              <font-awesome-icon icon="moon" />
            </div>
          </button>
        </div>

        <!-- Mobile Language Selector -->
        <div class="flex items-center justify-between">
          <span class="text-sm font-bold text-gray-700 dark:text-zinc-300">Language</span>
          <button
            @click="toggleLanguage"
            class="flex items-center space-x-2 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg"
          >
            <font-awesome-icon icon="globe" class="text-gray-400 dark:text-zinc-500" />
            <span class="text-sm font-bold text-gray-700 dark:text-zinc-300">{{ currentLanguage }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage.js'

const mobileMenuOpen = ref(false)
const isLangOpen = ref(false)
const activeSection = ref('home')
const isDark = ref(false)
const { currentLanguage, toggleLanguage, setLanguage } = useLanguage()
const route = useRoute()

/* Theme Toggle Component */
const toggleDark = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const isLinkActive = (identifier) => {
  if (identifier.startsWith('/')) {
    // It's a page route
    return route.path === identifier
  } else {
    // It's a homepage section
    return route.path === '/' && activeSection.value === identifier
  }
}

const handleScroll = () => {
  if (route.path === '/') {
    const sections = ['home', 'products', 'contact']
    const scrollPos = window.scrollY + 150
    let currentSection = ''

    for (const sectionId of sections) {
      const sectionEl = document.getElementById(sectionId)
      if (sectionEl && scrollPos >= sectionEl.offsetTop && scrollPos < sectionEl.offsetTop + sectionEl.offsetHeight) {
        currentSection = sectionId
        break
      }
    }

    if (!currentSection && window.scrollY < 200) {
      currentSection = 'home'
    }

    activeSection.value = currentSection
  } else {
    activeSection.value = ''
  }
}

watch(() => route.path, (newPath) => {
  if (newPath !== '/') {
    activeSection.value = ''
  }
  handleScroll()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  
  // Check for saved theme
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Navigation data
const navDataIndonesia = {
  home: "Beranda",
  about: "Tentang",
  services: "Layanan",

  products: "Produk",
  carrier: "Karir",
  contact: "Kontak"
}

const navDataEnglish = {
  home: "Home",
  about: "About",
  services: "Services",

  products: "Products",
  carrier: "Carrier",
  contact: "Contact"
}

const currentNavData = computed(() => {
  return currentLanguage.value === 'ID' ? navDataIndonesia : navDataEnglish
})
</script>

<style scoped>
/* Modern Navbar Base */
.modern-navbar {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.modern-navbar:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Navigation Links */
.nav-link {
  position: relative;
  color: #374151;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  white-space: nowrap;
}

.dark .nav-link {
  color: #a1a1aa; /* zinc-400 equivalent */
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #E42313;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: #E42313;
  background-color: rgba(228, 35, 19, 0.05);
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link.active {
  color: #E42313;
  font-weight: 700;
}

.dark .nav-link.active {
  color: #E42313;
}

.nav-link.active::before {
  width: 100%;
}

/* Language Button */
.language-button {
  position: relative;
  background: #E42313;
  color: white;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.language-button:hover {
  transform: translateY(-1px);
  background: #C31E10;
  box-shadow: 0 4px 12px rgba(228, 35, 19, 0.2);
}

.language-button:active {
  transform: translateY(0);
}

/* Theme Toggle Button (Dual Icon Track) */
.theme-toggle-button {
  position: relative;
  width: 4.5rem;
  height: 2.25rem;
  background-color: #f3f4f6;
  border-radius: 2rem;
  padding: 0.25rem;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e5e7eb;
  cursor: pointer;
}

.dark .theme-toggle-button {
  background-color: #18181b;
  border-color: #27272a;
}

.theme-toggle-button .toggle-circle {
  position: absolute;
  top: 0.2rem;
  left: 0.25rem;
  width: 1.75rem;
  height: 1.75rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.dark .theme-toggle-button .toggle-circle {
  left: 2.4rem;
  background-color: #27272a;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.theme-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
  position: relative;
  z-index: 1;
}

.theme-icons .fa-sun {
  color: #fbbf24;
  font-size: 0.9rem;
}

.theme-icons .fa-moon {
  color: #94a3b8;
  font-size: 0.9rem;
}

.dark .theme-icons .fa-sun {
  color: #4b5563;
}

.dark .theme-icons .fa-moon {
  color: #f1f5f9;
}

/* Mobile Menu Button */
.mobile-menu-button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.mobile-menu-button:hover {
  background-color: rgba(59, 130, 246, 0.05);
}

.hamburger-line {
  width: 20px;
  height: 16px;
  position: relative;
  cursor: pointer;
}

.hamburger-line span {
  display: block;
  width: 100%;
  height: 2px;
  background: #374151;
  border-radius: 1px;
  position: absolute;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark .hamburger-line span {
  background: #e4e4e7; /* zinc-200 equivalent */
}

.hamburger-line span:nth-child(1) {
  top: 0;
}

.hamburger-line span:nth-child(2) {
  top: 7px;
}

.hamburger-line span:nth-child(3) {
  top: 14px;
}

.hamburger-active span:nth-child(1) {
  transform: rotate(45deg);
  top: 7px;
}

.hamburger-active span:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.hamburger-active span:nth-child(3) {
  transform: rotate(-45deg);
  top: 7px;
}

/* Mobile Menu */
.mobile-menu {
  background: white;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(229, 231, 235, 0.5);
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark .mobile-menu {
  background: rgba(9, 9, 11, 0.95);
  border-top-color: #27272a;
}

.mobile-nav-link {
  display: block;
  color: #374151;
  font-weight: 500;
  padding: 0.875rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
}

.dark .mobile-nav-link {
  color: #a1a1aa;
}

.mobile-nav-link:hover {
  color: #E42313;
  background-color: rgba(228, 35, 19, 0.05);
  transform: translateX(4px);
}

.mobile-nav-link.active {
  color: #E42313;
  font-weight: 700;
  background-color: rgba(228, 35, 19, 0.1);
}

.mobile-language-button {
  display: block;
  width: 100%;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
}

.mobile-language-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px 0 rgba(37, 99, 235, 0.4);
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
