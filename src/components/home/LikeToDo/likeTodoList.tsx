import { GiCat } from 'react-icons/gi'
import { MdTravelExplore } from 'react-icons/md'
import { IoGameController } from 'react-icons/io5'
import { FiMusic } from 'react-icons/fi'
import { FaRegKeyboard } from 'react-icons/fa'
import React from 'react'

export interface LikeTodo {
  title: string
  value: string
  icon: React.ReactNode
  color: string
}

export const getLikeToDoList = (t: (key: string) => string): LikeTodo[] => [
  {
    title: t('cats'),
    value: t('catsText'),
    icon: <GiCat size={50} key='icon-cat' />,
    color: 'text-red-200',
  },
  {
    title: t('games'),
    value: t('gamesText'),
    icon: <IoGameController size={50} key='game' />,
    color: 'text-yellow-400',
  },
  {
    title: t('music'),
    value: t('musicText'),
    icon: <FiMusic size={50} key='game' />,
    color: 'text-green-300',
  },
  {
    title: t('travel'),
    value: t('travelText'),
    icon: <MdTravelExplore size={50} key='explore' />,
    color: 'text-blue-300',
  },
  {
    title: t('keyboards'),
    value: t('keyboardsText'),
    icon: <FaRegKeyboard size={50} key='game' />,
    color: 'text-purple-300',
  },
]
