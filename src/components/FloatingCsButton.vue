<template>
  <div class="floating-cs-container">
    <!-- Main Floating Button -->
    <div
      @click="openWhatsApp"
      class="floating-cs-button group"
    >
      <!-- WhatsApp Icon -->
      <div class="whatsapp-icon">
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
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
const whatsappNumber = '08114499096'

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
    ? 'Halo! Saya ingin bertanya mengenai solusi ISP dan IT dari Shangtel. Bisakah Anda memberikan informasi lebih lanjut?'
    : 'Hello! I would like to inquire about Shangtel\'s ISP and IT solutions. Can you provide more information?'

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
    }, 3000)
  }, 5000)
})
</script>

<style scoped>
.floating-cs-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

/* Main Floating Button */
.floating-cs-button {
  position: relative;
  width: 60px;
  height: 60px;
  background: #E42313;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(228, 35, 19, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.floating-cs-button:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(37, 211, 102, 0.4);
}

/* WhatsApp Icon */
.whatsapp-icon {
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Pulse Animation */
.pulse-ring,
.pulse-ring-delayed {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(228, 35, 19, 0.3);
  border-radius: 1rem;
  animation: pulse 2s infinite;
}

.pulse-ring-delayed {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Chat Tooltip */
.chat-tooltip {
  position: absolute;
  bottom: 70px;
  right: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.chat-tooltip.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.tooltip-content {
  position: relative;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #E42313;
}

.tooltip-arrow {
  position: absolute;
  bottom: -6px;
  right: 20px;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.9);
  transform: rotate(45deg);
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