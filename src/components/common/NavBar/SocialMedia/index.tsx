import SocialMediaItem from './SocialMediaItem'
import { socialMedia } from '@/constants/socialMedia'

export default function SocialMedia() {
  return (
    <nav className='flex items-start justify-center gap-4 md:justify-end'>
      <div className='flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-end md:gap-6'>
        {socialMedia?.map((item, id) => (
          <SocialMediaItem key={item.label} item={item} id={id} />
        ))}
      </div>
    </nav>
  )
}
