import { TechIcons } from './techIconsList'

export default function TechItem({ item }: { item: TechIcons }) {
  return (
    <div key={item.label} className={`text-[30px] md:text-[50px]`}>
      <div className='flex flex-col items-center justify-center gap-4 opacity-60 hover:opacity-100 md:justify-start'>
        <div className={`${item.color}`}>{item.icon}</div>
        <p className='block text-xs font-semibold'>{item.label}</p>
      </div>
    </div>
  )
}
