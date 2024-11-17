'use client'
import Link from 'next/link'
import Image from 'next/image'
import { BiUpArrow } from 'react-icons/bi'
import { getFooterElements } from './footerLinks'
import { useTranslation } from 'src/hooks/useTranslation'
import { Separator } from '@/components/ui/separator'
import Logo from '../Logo'
import FooterItem from './FooterItem'

export default function Footer(): JSX.Element {
  const { t } = useTranslation()
  const footerElements = getFooterElements(t)

  return (
    <>
      <Separator className='w-full' orientation='horizontal' />
      <div className='relative mb-8 mt-12'>
        <footer className='flex flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-0'>
          <Logo />
          {footerElements.map((item) => (
            <FooterItem key={item.title} item={item} />
          ))}
        </footer>
      </div>
    </>
  )
}
