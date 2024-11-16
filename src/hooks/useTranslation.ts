'use client'
import getValueAtPathOfObject from '../utils/getValueAtPathOfObject'
import en from '../i18n/en.json'
import es from '../i18n/es.json'
import { useContext } from 'react'
import { LanguageContext } from '@/context/languageContext'

const locales: any = {
  en,
  es,
}

export const useTranslation = () => {
  const { language } = useContext(LanguageContext)
  const t = (key: string): string =>
    getValueAtPathOfObject(locales[language || ''], key) || key

  const staticTranslate = (key = '', lan = 'en') => {
    getValueAtPathOfObject(locales[lan ?? language], key) || key
  }

  return {
    t,
    st: staticTranslate,
  }
}
