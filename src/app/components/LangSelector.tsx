import i18n from '@/utils/language/i18n'
import { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

function LangSelector() {
  const [lang, setLang] = useState('AD')

  const getUserBrowserLanguage = () => {
    const lang = window.navigator.language

    if (lang.includes('es')) return 'es'
    if (lang.includes('en')) return 'en'
    if (lang.includes('cat')) return 'cat'
    if (lang.includes('fr')) return 'fr'

    return 'cat'
  }

  const countryCodeToLangCode = (countryCode: string) => {
    const country = countryCode.toLowerCase()

    if (country.includes('es')) return 'es'
    if (country.includes('gb')) return 'en'
    if (country.includes('ad')) return 'cat'
    if (country.includes('fr')) return 'fr'

    return 'cat'
  }

  const langCodeToCountryCode = (countryCode: string) => {
    const country = countryCode.toLowerCase()

    if (country.includes('es')) return 'ES'
    if (country.includes('gb')) return 'GB'
    if (country.includes('cat')) return 'AD'
    if (country.includes('fr')) return 'FR'

    return 'AD'
  }

  const handleLangSelect = (countryCode: string) => {
    const currentLang = countryCodeToLangCode(countryCode)
    i18n.changeLanguage(currentLang)
    setLang(countryCode)
  }

  return (
    <ReactFlagsSelect
      countries={['AD', 'ES', 'GB', 'FR']}
      customLabels={{
        AD: 'Català',
        GB: 'English',
        ES: 'Español',
        FR: 'Français',
      }}
      selected={lang}
      onSelect={handleLangSelect}
    />
  )
}

export default LangSelector
