import { GiCat } from 'react-icons/gi'
import { MdTravelExplore } from 'react-icons/md'
import { IoGameController } from 'react-icons/io5'
import { FiMusic } from 'react-icons/fi'
import { FaRegKeyboard } from 'react-icons/fa'

interface LikeTodo {
  title: string
  value: string
  icon: any
}

export const likeToDoList: LikeTodo[] = [
  {
    title: 'Cats',
    value:
      'I have always had different pets but I like cats for their tranquility and I identify with the same taste for being asleep all day long.',
    icon: <GiCat size={50} key='icon-cat' />,
  },
  {
    title: 'Games',
    value:
      'Video games have always been an important part of my life and have taught me a lot and have helped me to de-stress my mind when you are always overthinking things.',
    icon: <IoGameController size={50} key='game' />,
  },
  {
    title: 'Music',
    value:
      'I love music, no matter the place or the time, music is a fundamental part of my life and my favorite band is Arctic Monkeys.',
    icon: <FiMusic size={50} key='game' />,
  },
  {
    title: 'Travel',
    value:
      'I enjoy getting out and exploring interesting areas such as esplanades and ranches where I can go for a walk and clear my mind.',
    icon: <MdTravelExplore size={50} key='explore' />,
  },
  {
    title: 'Keyboards',
    value:
      'In recent months I have discovered a great community of both programmers and geeks and among them the keyboard community with whom I have learned how to modding and customize a mechanical keyboard.',
    icon: <FaRegKeyboard size={50} key='game' />,
  },
]
