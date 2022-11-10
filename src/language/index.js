import { createI18n } from 'vue-i18n'
import zh from './components/zh'
import en from './components/en'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n
