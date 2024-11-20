'use client'
import { getFooterElements } from './constants/footerLinks'
import { useTranslation } from 'src/hooks/useTranslation'
import { Separator } from '@/components/ui/separator'
import Logo from '../Logo'
import FooterItem from './components/FooterItem'

export default function Footer(): JSX.Element {
  const { t } = useTranslation()
  const footerElements = getFooterElements(t)

  return (
    <>
      <Separator className='w-full' orientation='horizontal' />
      <div className='relative mb-8 mt-6 px-5 sm:mt-8 md:my-12 md:px-0 lg:px-0'>
        <footer className='flex flex-col gap-8 md:w-full md:flex-row md:flex-wrap md:justify-between lg:grid lg:grid-cols-4 lg:gap-0'>
          <Logo />
          {footerElements.map((item) => (
            <FooterItem key={item.title} item={item} />
          ))}
        </footer>
      </div>
    </>
  )
}
