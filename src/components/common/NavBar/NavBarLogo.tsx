import Image from 'next/image'
import Link from 'next/link'
import paths from 'src/constants/paths'

const NavBarLogo = () => (
  <div className='relative h-10 w-40 cursor-pointer'>
    <Link href={paths.root} className='transition hover:animate-pulse'>
      <Image
        draggable='false'
        src='/assets/footer/logo.svg'
        alt='mrLuisFer logo'
        layout='fill'
      />
    </Link>
  </div>
)

export default NavBarLogo
