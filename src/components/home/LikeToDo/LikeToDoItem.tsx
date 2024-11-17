import { Dispatch, SetStateAction } from 'react'
import { LikeTodo } from './likeTodoList'

type LikeToDoItemProps = {
  item: LikeTodo
  iconActive: string
  accordionName: string
}
export default function LikeToDoItem({
  item,
  iconActive,
  accordionName,
}: LikeToDoItemProps) {
  return (
    <div key={item.title} className='border-none text-left'>
      <h3
        className={`text-2xl font-bold transition ${
          item.title === iconActive || item.title === accordionName
            ? `${item.color} opacity-100`
            : 'text-white opacity-60'
        }`}>
        {item.title}
      </h3>
      {(item.title === accordionName || item.title === iconActive) && (
        <p className='transform text-justify text-base text-white opacity-40 transition-transform hover:opacity-80'>
          {item.value}
        </p>
      )}
    </div>
  )
}
