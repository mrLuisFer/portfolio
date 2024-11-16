import { useTranslation } from '@/hooks/useTranslation'
import SocialMediaItem from './SocialMediaItem'
import { socialMedia } from '@/constants/socialMedia'

export default function SocialMedia() {
  const { t } = useTranslation()
  return (
    <div className='flex items-center gap-9'>
      {socialMedia?.map((item) => <SocialMediaItem key={item.label} item={item} />)}
    </div>
  )
}
