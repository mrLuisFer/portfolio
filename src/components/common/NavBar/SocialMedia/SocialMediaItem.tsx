import { TbExternalLink } from 'react-icons/tb'
import { ISocialMedia, socialMedia } from '@/constants/socialMedia'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SocialMediaItem({
  item,
  id,
}: {
  item: ISocialMedia
  id: number
}) {
  const Icon = item.Icon ?? (() => null)
  const isLastItem = id === socialMedia.length - 1
  return (
    <div key={item.label} className='flex items-center gap-6'>
      <div className='group flex items-center gap-1 text-white opacity-60 transition hover:opacity-100'>
        <span>
          <Icon />
        </span>
        {item.external ? (
          <a href={item.href} target='_blank' rel='noopener noreferrer'>
            {item.label}
          </a>
        ) : (
          <Link href={item.href}>{item.label}</Link>
        )}
        {item.external && (
          <div className='opacity-0 transition group-hover:opacity-100'>
            <TbExternalLink />
          </div>
        )}
      </div>
      {!isLastItem && (
        <Separator
          aria-orientation='vertical'
          orientation='vertical'
          className='h-[20px] w-[1px]'
        />
      )}
    </div>
  )
}
