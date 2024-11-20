import Image from 'next/image'
import Link from 'next/link'
import paths from 'src/constants/paths'
import GlowBox from './GlowBox'

const Logo = () => (
  <GlowBox padding={2} color='#5b91fba9' size={80} className='h-fit'>
    <div className='relative h-10 w-40 cursor-pointer select-none'>
      <Link href={paths.root} className='transition hover:animate-pulse'>
        <Image
          draggable='false'
          src='/assets/footer/logo.svg'
          alt='mrLuisFer logo'
          layout='fill'
          className='object-contain'
        />
      </Link>
    </div>
  </GlowBox>
)

export default Logo
