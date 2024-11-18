'use client'
import getValueAtPathOfObject from '../utils/getValueAtPathOfObject'
import en from '../i18n/en.json'
import es from '../i18n/es.json'
import { useContext } from 'react'
import { LanguageContext } from '@/context/languageContext'

type Locales = {
  [key: string]: { [key: string]: string }
}

const locales: Locales = {
  en,
  es,
}

export const useTranslation = () => {
  const { language } = useContext(LanguageContext)

  const t = (key: string): string => {
    const locale = locales[language || 'en']
    return getValueAtPathOfObject(locale, key) || key
  }

  const staticTranslate = (key: string = '', lan: string = 'en'): string => {
    const locale = locales[lan]
    return getValueAtPathOfObject(locale, key) || key
  }

  return {
    t,
    st: staticTranslate,
  }
}
