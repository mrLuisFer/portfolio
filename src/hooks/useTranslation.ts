import { useRouter } from 'next/router'
import getValueAtPathOfObject from '../utils/getValueAtPathOfObject'
import en from '../i18n/en.json'
import es from '../i18n/es.json'

const locales: any = {
  en,
  es,
}

export const useTranslation = () => {
  const router = useRouter()
  const { locale } = router
  const language = locale!

  const t = (key: string): string =>
    getValueAtPathOfObject(locales[locale || ''], key) || key

  const staticTranslate = (key = '', lan = 'en') => {
    getValueAtPathOfObject(locales[lan], key) || key
  }

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale })
  }

  return {
    t,
    st: staticTranslate,
    language,
    changeLanguage,
  }
}
