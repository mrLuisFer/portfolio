'use client'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

type Language = 'en' | 'es' | string
type LanguageContextType = {
  language: Language
  setLanguage: Dispatch<SetStateAction<Language>>
}
export const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
)

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}