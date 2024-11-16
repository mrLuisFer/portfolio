import { Dispatch, SetStateAction } from 'react'
import { LikeTodo } from './likeTodoList'

type LikeToDoItemProps = {
  item: LikeTodo
  iconActive: string
  accordionName: string
  setAccordionName: Dispatch<SetStateAction<string>>
}
export default function LikeToDoItem({
  item,
  iconActive,
  accordionName,
  setAccordionName,
}: LikeToDoItemProps) {
  return (
    <div
      key={item.title}
      className='border-none text-left'
      onMouseOver={() => setAccordionName(item.title)}
      onMouseLeave={() => setAccordionName('')}>
      <h3
        className={`text-2xl font-bold transition ${
          item.title === iconActive || item.title === accordionName
            ? `${item.color} opacity-100`
            : 'text-white opacity-60'
        }`}>
        {item.title}
      </h3>
      {(item.title === accordionName || item.title === iconActive) && (
        <div className='transform transition-transform'>
          <p className='text-justify text-white opacity-40 hover:opacity-80'>
            {item.value}
          </p>
        </div>
      )}
    </div>
  )
}
