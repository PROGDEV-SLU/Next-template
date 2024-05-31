import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'
import translationEN from './locales/en/translation.json'
import translationES from './locales/es/translation.json'
import translationCAT from './locales/cat/translation.json'

const fallbackLng = ['es']

const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
    cat: {
        translation: translationCAT,
    },
}

i18n.use(Backend) // used to load data from othe directory
    .use(LanguageDetector) // detects the current language
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng, // default language
        detection: {},
        debug: false,
        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    })

export default i18n
