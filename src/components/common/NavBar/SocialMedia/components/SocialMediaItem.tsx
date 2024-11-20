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
    <div
      key={item.label}
      className='flex items-center gap-2 rounded-lg p-1 transition hover:bg-neutral-900 md:gap-6 md:hover:bg-transparent'>
      <div className='group flex items-center gap-1 text-white opacity-60 transition hover:opacity-100'>
        <span>
          <Icon />
        </span>
        {item.external ? (
          <a
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
            className='leading-relaxed hover:underline hover:md:no-underline'>
            {item.label}
          </a>
        ) : (
          <Link href={item.href}>{item.label}</Link>
        )}
        {item.external && (
          <div className='hidden opacity-0 transition group-hover:opacity-100 md:block'>
            <TbExternalLink />
          </div>
        )}
      </div>
      {!isLastItem && (
        <Separator
          aria-orientation='vertical'
          orientation='vertical'
          className='hidden h-[20px] w-[1px] md:inline-block'
        />
      )}
    </div>
  )
}
