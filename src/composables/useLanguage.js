import { ref } from 'vue'

// Global language state
const currentLanguage = ref('ID')

export const useLanguage = () => {
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'ID' ? 'ENG' : 'ID'
    console.log('Language switched to:', currentLanguage.value)
  }

  const setLanguage = (lang) => {
    currentLanguage.value = lang
  }

  return {
    currentLanguage,
    toggleLanguage,
    setLanguage
  }
}