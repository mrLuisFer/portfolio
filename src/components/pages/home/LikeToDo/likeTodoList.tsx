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

export const getLikeToDoList = (t: (key: string) => string): LikeTodo[] => [
  {
    title: t('cats'),
    value: t('catsText'),
    icon: <GiCat size={50} key='icon-cat' />,
  },
  {
    title: t('games'),
    value: t('gamesText'),
    icon: <IoGameController size={50} key='game' />,
  },
  {
    title: t('music'),
    value: t('musicText'),
    icon: <FiMusic size={50} key='game' />,
  },
  {
    title: t('travel'),
    value: t('travelText'),
    icon: <MdTravelExplore size={50} key='explore' />,
  },
  {
    title: t('keyboards'),
    value: t('keyboardsText'),
    icon: <FaRegKeyboard size={50} key='game' />,
  },
]
