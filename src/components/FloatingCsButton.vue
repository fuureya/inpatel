<template>
  <div class="floating-cs-container">
    <!-- Main Floating Button -->
    <div
      @click="openWhatsApp"
      class="floating-cs-button group cta-highlight cta-pulse"
    >
      <!-- WhatsApp Icon -->
      <div class="whatsapp-icon">
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-3xl" />
      </div>

      <!-- Pulse Animation -->
      <div class="pulse-ring"></div>
      <div class="pulse-ring-delayed"></div>
    </div>

    <!-- Chat Tooltip -->
    <div
      class="chat-tooltip"
      :class="{ 'show': showTooltip }"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <div class="tooltip-content">
        <span class="tooltip-text">{{ currentTooltipData.message }}</span>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

const showTooltip = ref(false)
const { currentLanguage } = useLanguage()

// WhatsApp number from footer
const whatsappNumber = '6281144406726'

// Tooltip data for both languages
const tooltipDataIndonesia = {
  message: "Ada pertanyaan tentang layanan ISP/IT kami? Chat sekarang!"
}

const tooltipDataEnglish = {
  message: "Questions about our ISP/IT solutions? Chat now!"
}

const currentTooltipData = computed(() => {
  return currentLanguage.value === 'ID' ? tooltipDataIndonesia : tooltipDataEnglish
})

// Open WhatsApp with predefined message
const openWhatsApp = () => {
  const defaultMessage = currentLanguage.value === 'ID'
    ? 'Halo! Saya ingin bertanya mengenai solusi ISP dan IT dari Inpatel. Bisakah Anda memberikan informasi lebih lanjut?'
    : 'Hello! I would like to inquire about Inpatel\'s ISP and IT solutions. Can you provide more information?'

  const encodedMessage = encodeURIComponent(defaultMessage)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  window.open(whatsappUrl, '_blank')
}

// Auto-show tooltip after 5 seconds
onMounted(() => {
  setTimeout(() => {
    showTooltip.value = true
    setTimeout(() => {
      showTooltip.value = false
    }, 4000)
  }, 5000)
})
</script>

<style scoped>
.floating-cs-container {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  z-index: 1000;
}

/* Main Floating Button */
.floating-cs-button {
  position: relative;
  width: 65px;
  height: 65px;
  background: var(--inpatel-primary);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 35px rgba(16, 103, 143, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.floating-cs-button:hover {
  transform: scale(1.1) rotate(5deg);
  background: var(--inpatel-dark);
  box-shadow: 0 15px 45px rgba(16, 103, 114, 0.5);
}

/* WhatsApp Icon */
.whatsapp-icon {
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
}

/* Pulse Animation */
.pulse-ring,
.pulse-ring-delayed {
  position: absolute;
  width: 65px;
  height: 65px;
  border: 2px solid var(--inpatel-primary);
  border-radius: 1.25rem;
  animation: pulse 2.5s infinite;
  opacity: 0.5;
}

.pulse-ring-delayed {
  animation-delay: 1.2s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
}

/* Chat Tooltip */
.chat-tooltip {
  position: absolute;
  bottom: 80px;
  right: 0;
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.chat-tooltip.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.tooltip-content {
  position: relative;
  background: #ffffff;
  color: #111827;
  padding: 14px 20px;
  border-radius: 1rem;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.dark .tooltip-content {
  background: #18181b;
  color: white;
  border-color: rgba(255, 255, 255, 0.1);
}

.tooltip-arrow {
  position: absolute;
  bottom: -6px;
  right: 25px;
  width: 12px;
  height: 12px;
  background: inherit;
  transform: rotate(45deg);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}

.dark .tooltip-arrow {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .floating-cs-container {
    bottom: 1rem;
    right: 1rem;
  }

  .floating-cs-button {
    width: 56px;
    height: 56px;
  }

  .pulse-ring,
  .pulse-ring-delayed {
    width: 56px;
    height: 56px;
  }

  .tooltip-content {
    font-size: 13px;
    padding: 10px 14px;
  }

  .chat-tooltip {
    bottom: 65px;
    right: -80px;
  }
}

@media (max-width: 480px) {
  .floating-cs-button {
    width: 52px;
    height: 52px;
  }
}

/* Animation for smooth transitions */
.floating-cs-button * {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>