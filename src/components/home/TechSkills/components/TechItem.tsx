import { TechIcons } from '../constants/techIconsList'

export default function TechItem({ item }: { item: TechIcons }) {
  return (
    <div key={item.label} className={`group text-[30px] md:text-[50px]`}>
      <div className='flex flex-col items-center justify-center gap-4 md:justify-start'>
        <div className={`${item.color}`}>{item.icon}</div>
        <p className='block text-xs font-semibold opacity-60 group-hover:opacity-100'>
          {item.label}
        </p>
      </div>
    </div>
  )
}
