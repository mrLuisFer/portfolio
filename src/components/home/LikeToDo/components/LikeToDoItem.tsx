import {  useMemo } from 'react'
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
  const isActive = useMemo(
    () => item.title === iconActive || item.title === accordionName,
    [item.title, iconActive, accordionName]
  )

  return (
    <div key={item.title} className='border-none text-left'>
      <h3
        className={`text-2xl font-bold transition ${
          isActive ? `${item.color} opacity-100` : 'text-white opacity-60'
        }`}>
        {item.title}
      </h3>
      {isActive && (
        <p
          className={`transform text-justify text-base text-white transition hover:opacity-100 ${isActive ? 'opacity-80' : 'opacity-40'}`}>
          {item.value}
        </p>
      )}
    </div>
  )
}
