import { useContext, useMemo } from 'react'
import { LanguageContext } from 'src/context/languageContext'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTranslation } from '@/hooks/useTranslation'

const languages: {
  [key: string]: string
} = {
  en: 'English',
  es: 'Español',
}
export default function ChangeLanguage() {
  const { language, setLanguage } = useContext(LanguageContext)
  const hasLanguage = useMemo(() => !!language?.length, [language])
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-1'>
      <Select onValueChange={(value) => setLanguage(value)}>
        <SelectTrigger className='uppercase text-white'>
          <SelectValue placeholder={hasLanguage ? languages[language] : 'Theme'} />
        </SelectTrigger>
        <SelectContent className='text-white'>
          <SelectItem value='en'>English</SelectItem>
          <SelectItem value='es'>Español</SelectItem>
        </SelectContent>
      </Select>
      <span className='text-xs text-white opacity-50 transition hover:opacity-100'>
        {t('changeLanguage')}
      </span>
    </div>
  )
}
