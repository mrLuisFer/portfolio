'use client'
import Logo from '../Logo'
import ChangeLanguage from './ChangeLanguage'
import SocialMedia from './SocialMedia'

export default function NavBar(): JSX.Element {
  return (
    <header className='none mb-8 items-center justify-between lg:flex'>
      <Logo />
      <nav className='flex items-start gap-4'>
        <SocialMedia />
      </nav>
    </header>
  )
}
