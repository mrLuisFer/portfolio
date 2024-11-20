'use client'
import Logo from '../Logo'
import SocialMedia from './SocialMedia'

export default function NavBar(): JSX.Element {
  return (
    <header className='mb-8 flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0'>
      <div className='flex items-center justify-center md:inline-block'>
        <Logo />
      </div>
      <SocialMedia />
    </header>
  )
}
