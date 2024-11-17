import { FooterElements } from './footerLinks'
import FooterLink from './FooterLink'

export default function FooterItem({ item }: { item: FooterElements }) {
  return (
    <div key={item.title}>
      <h3
        className={`text-xl font-bold ${
          item.titleColor ? `text-${item.titleColor}` : 'text-white'
        }`}>
        {item.title}
      </h3>
      <div className='mt-4 flex flex-col gap-4'>
        {item.links.map((link) => (
          <FooterLink key={link.label} link={link} />
        ))}
      </div>
    </div>
  )
}
