import React from 'react'
import { FooterLink as TFooterLink } from './footerLinks'
import Link from 'next/link'
import { TbExternalLink } from 'react-icons/tb'

export default function FooterLink({ link }: { link: TFooterLink }) {
  const Component = link.isExternal ? 'a' : Link
  const props = {
    key: link.label,
    href: link.href,
    className: 'text-white/50 transition-opacity hover:text-white inline-block w-fit',
    ...(link.isExternal ? { target: '_blank', rel: 'noreferrer' } : { passHref: true }),
  }

  return React.createElement(
    Component,
    props,
    <div className='group flex items-center gap-2'>
      <div></div>
      {link.label}
      {link.isExternal && (
        <div className='opacity-0 group-hover:opacity-100'>
          <TbExternalLink />
        </div>
      )}
    </div>
  )
}
