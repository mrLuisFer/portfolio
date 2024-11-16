import Link from '../../custom/Link'
import { TbExternalLink } from 'react-icons/tb'
import { useState } from 'react'
import { ISocialMedia } from '@/constants/socialMedia'

interface ISocialMediaItemProps extends ISocialMedia {}

export default function SocialMediaItem({ item }: { item: ISocialMediaItemProps }) {
  const Icon = item.Icon ?? (() => null)
  return (
    <div
      key={item.label}
      className='group flex items-center gap-1 text-white opacity-60 transition hover:opacity-100'
    >
      <span>
        <Icon />
      </span>
      <Link href={item.href} external={item.external}>
        {item.label}
      </Link>
      {item.external && (
        <div className='opacity-0 transition group-hover:opacity-100'>
          <TbExternalLink />
        </div>
      )}
    </div>
  )
}
