<template>
  <nav class="modern-navbar bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-white/20 dark:border-zinc-800/50 sticky top-0 z-50 transition-all duration-500">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 group">
          <router-link to="/" class="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
            <img class="h-12 w-auto" src="@/assets/img/inpatel.png" alt="Inpatel" />
          </router-link>
        </div>

        <!-- Menu Items -->
        <div class="hidden lg:flex items-center space-x-2">
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



          <router-link to="/carrier" class="nav-link" :class="{ 'active': isLinkActive('/carrier') }">
            {{ currentNavData.carrier }}
          </router-link>
          <router-link :to="{ path: '/', hash: '#contact' }" class="nav-link"
            :class="{ 'active': isLinkActive('contact') }">
            {{ currentNavData.contact }}
          </router-link>
        </div>

        <!-- Actions -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button
            @click="toggleDark"
            class="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            <div class="toggle-track">
              <div class="toggle-thumb" :class="{ 'translate-x-[26px]': isDark }">
                <font-awesome-icon :icon="isDark ? 'moon' : 'sun'" class="text-xs" />
              </div>
              <div class="flex justify-between px-2 w-full text-[10px]">
                <font-awesome-icon icon="sun" class="text-amber-500" />
                <font-awesome-icon icon="moon" class="text-zinc-600 dark:text-zinc-400" />
              </div>
            </div>
          </button>

          <!-- Language Selector -->
          <div class="relative group">
            <button
              @click="isLangOpen = !isLangOpen"
              class="lang-selector-btn"
            >
              <font-awesome-icon icon="globe" class="text-inpatel-primary" />
              <span class="text-sm font-bold uppercase tracking-wider">{{ currentLanguage }}</span>
              <font-awesome-icon
                icon="chevron-down"
                class="text-[10px] transition-transform duration-300"
                :class="{ 'rotate-180': isLangOpen }"
              />
            </button>
            
            <!-- Desktop Language Dropdown -->
            <transition name="fade-slide">
              <div v-if="isLangOpen" 
                class="absolute right-0 mt-3 w-40 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl py-2 overflow-hidden z-50"
              >
                <button 
                  @click="setLanguage('ID'); isLangOpen = false"
                  class="lang-option"
                  :class="{ 'active-lang': currentLanguage === 'ID' }"
                >
                  <span class="w-2 h-2 rounded-full mr-2" :class="currentLanguage === 'ID' ? 'bg-inpatel-primary' : 'bg-transparent'"></span>
                  Indonesia
                </button>
                <button 
                  @click="setLanguage('ENG'); isLangOpen = false"
                  class="lang-option"
                  :class="{ 'active-lang': currentLanguage === 'ENG' }"
                >
                  <span class="w-2 h-2 rounded-full mr-2" :class="currentLanguage === 'ENG' ? 'bg-inpatel-primary' : 'bg-transparent'"></span>
                  English
                </button>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden flex items-center space-x-4">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="mobile-toggle p-2 rounded-xl transition-colors" :class="mobileMenuOpen ? 'bg-inpatel-primary/10 text-inpatel-primary' : 'text-zinc-600 dark:text-zinc-400'">
            <div class="hamburger" :class="{ 'open': mobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="mobile-menu-anim">
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay lg:hidden">
        <div class="px-6 pt-10 pb-8 space-y-2">
          <router-link v-for="(label, key) in currentNavData" :key="key" 
            :to="{ path: key === 'about' || key === 'services' || key === 'carrier' ? '/'+(key === 'about' ? 'tentang-kami' : key) : '/', hash: key === 'about' || key === 'services' || key === 'carrier' ? '' : '#'+key }" 
            @click="mobileMenuOpen = false" 
            class="mobile-link"
            :class="{ 'mobile-active': isLinkActive(key === 'about' || key === 'services' || key === 'carrier' ? '/'+(key === 'about' ? 'tentang-kami' : key) : key) }"
          >
            {{ label }}
          </router-link>
        </div>

        <div class="px-8 py-6 space-y-6 border-t border-zinc-100 dark:border-zinc-800/50">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-zinc-500">Language</span>
            <div class="flex space-x-2">
              <button @click="setLanguage('ID')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all" :class="currentLanguage === 'ID' ? 'bg-inpatel-primary text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'">ID</button>
              <button @click="setLanguage('ENG')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all" :class="currentLanguage === 'ENG' ? 'bg-inpatel-primary text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'">EN</button>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-zinc-500">Theme</span>
            <button @click="toggleDark" class="theme-toggle-mobile p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <font-awesome-icon :icon="isDark ? 'moon' : 'sun'" :class="isDark ? 'text-inpatel-light' : 'text-amber-500'" />
            </button>
          </div>
        </div>
      </div>
    </transition>
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
    const sections = ['home', 'contact']
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
  carrier: "Karir",
  contact: "Kontak"
}

const navDataEnglish = {
  home: "Home",
  about: "About",
  services: "Services",
  carrier: "Carrier",
  contact: "Contact"
}

const currentNavData = computed(() => {
  return currentLanguage.value === 'ID' ? navDataIndonesia : navDataEnglish
})
</script>

<style scoped>
.modern-navbar {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
}

/* Nav Links */
.nav-link {
  @apply px-5 py-2 text-sm font-black text-zinc-900 dark:text-zinc-100 rounded-xl transition-all duration-300 relative overflow-hidden uppercase tracking-wider;
}

.nav-link:hover {
  color: var(--inpatel-primary);
  background-color: rgba(16, 103, 143, 0.05); /* Fallback to hex-based rgba for safety or use color-mix if supported */
}

.dark .nav-link:hover {
  background-color: rgba(16, 103, 143, 0.1);
}

.nav-link.active {
  color: var(--inpatel-primary);
  background-color: rgba(16, 103, 143, 0.1);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--inpatel-primary);
  transition: all 0.3s;
}

.nav-link.active::after {
  width: 100%;
}

/* Theme Toggle Button */
.theme-toggle-btn {
  position: relative;
  padding: 0.25rem;
  border-radius: 1rem;
  background-color: #f4f4f5; /* zinc-100 */
  border: 1px solid #e4e4e7; /* zinc-200 */
  transition: all 0.3s;
}

.dark .theme-toggle-btn {
  background-color: #18181b; /* zinc-900 */
  border-color: #27272a; /* zinc-800 */
}

.toggle-track {
  position: relative;
  width: 60px;
  height: 1.75rem;
  display: flex;
  align-items: center;
}

.toggle-thumb {
  position: absolute;
  left: 2px;
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
  z-index: 10;
}

.dark .toggle-thumb {
  background-color: #27272a;
}

/* Lang Selector */
.lang-selector-btn {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #fafafa;
  border: 1px solid #e4e4e7;
  border-radius: 0.75rem;
  transition: all 0.3s;
  color: #3f3f46;
}

.dark .lang-selector-btn {
  background-color: rgba(24, 24, 27, 0.5);
  border-color: #27272a;
  color: #d4d4d8;
}

.lang-selector-btn:hover {
  border-color: var(--inpatel-primary);
}

.lang-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #52525b;
  transition: all 0.2s;
}

.dark .lang-option {
  color: #a1a1aa;
}

.lang-option:hover {
  background-color: rgba(16, 103, 143, 0.05);
  color: var(--inpatel-primary);
}

.active-lang {
  color: var(--inpatel-primary) !important;
  background-color: rgba(16, 103, 143, 0.1);
}

/* Hamburger transition */
.hamburger {
  @apply flex flex-col justify-between w-5 h-4;
}

.hamburger span {
  @apply block h-0.5 bg-current rounded-full transition-all duration-300 origin-left;
}

.hamburger.open span:nth-child(1) { @apply rotate-45 translate-x-0.5; }
.hamburger.open span:nth-child(2) { @apply opacity-0 -translate-x-2; }
.hamburger.open span:nth-child(3) { @apply -rotate-45 translate-x-0.5; }

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  @apply absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900 shadow-2xl;
}

.mobile-link {
  @apply block px-4 py-3 text-lg font-bold text-zinc-600 dark:text-zinc-400 rounded-2xl transition-all;
}

.mobile-active {
  color: var(--inpatel-primary);
  background-color: rgba(16, 103, 143, 0.05);
  transform: translateX(0.5rem);
}

/* Animation Transitions */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.mobile-menu-anim-enter-active, .mobile-menu-anim-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-anim-enter-from, .mobile-menu-anim-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
