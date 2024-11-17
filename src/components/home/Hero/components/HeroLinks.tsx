import SocialMediaItem from '@/components/common/NavBar/SocialMedia/SocialMediaItem'
import { Button } from '@/components/ui/button'
import { socialMedia } from '@/constants/socialMedia'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

export default function HeroLinks() {
  const { t } = useTranslation()
  const socialMediaFiltered = socialMedia.filter(
    (social) =>
      social.label?.toLowerCase() === 'linkedin' ||
      social.label?.toLowerCase() === 'github'
  )

  return (
    <section className='mt-8 flex items-center justify-center space-x-8 md:justify-start'>
      {socialMediaFiltered.map((social, id) => (
        <SocialMediaItem key={social.label} item={social} id={id} />
      ))}
      <Button asChild>
        <Link href='/#about'>
          <FaUser />
          {t('aboutMe')}
        </Link>
      </Button>
    </section>
  )
}
