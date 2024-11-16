'use client'
import { useTranslation } from 'src/hooks/useTranslation'
import HeroAnimatedImg from './components/HeroAnimatedImg'
import HeroLinks from './components/HeroLinks'
import HeroContent from './components/HeroContent'

export default function Hero(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-between md:space-x-8 md:space-y-0 lg:mx-auto lg:justify-evenly'>
      <HeroAnimatedImg />
      <div className='flex flex-col items-start gap-2 md:w-6/12 lg:w-auto'>
        <HeroContent />
        <HeroLinks />
      </div>
    </div>
  )
}
