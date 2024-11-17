'use client'
import { useState, useEffect } from 'react'
import EditorUI from './Editor'
import { getLikeToDoList } from './likeTodoList'
import { useTranslation } from 'src/hooks/useTranslation'
import GlowBox from '@/components/common/GlowBox'
import LikeToDoItem from './LikeToDoItem'
import SectionTitle from '@/components/common/SectionTitle'
import { Button } from '@/components/ui/button'
import { GrPrevious, GrNext } from 'react-icons/gr'

export default function LikeToDo() {
  const [iconActive, setIconActive] = useState<string>('')
  const [accordionName, setAccordionName] = useState<string>('')
  const [itemIndex, setItemIndex] = useState<number>(0)
  const [shouldPauseInterval, setShouldPauseInterval] = useState(false)

  const { t } = useTranslation()
  const likeToDoList = getLikeToDoList(t)

  // sets a 2 second interval to change the active accordion
  useEffect(() => {
    if (shouldPauseInterval) return

    const interval = setInterval(() => {
      if (itemIndex === 4) {
        setItemIndex(0)
      } else {
        setItemIndex(itemIndex + 1)
      }
      setAccordionName(likeToDoList[itemIndex].title)
      setIconActive(likeToDoList[itemIndex].title)
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [itemIndex, likeToDoList, shouldPauseInterval])

  // this reactivates the interval when the user clicks the next or previous button
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (shouldPauseInterval) {
        setShouldPauseInterval(false)
      }
    }, 2000)

    return () => clearTimeout(timeOut)
  }, [shouldPauseInterval])

  return (
    <div className='relative'>
      <SectionTitle
        glowProps={{ color: '#fef4636f' }}
        className='bg-gradient-to-tr from-yellow-500 to-yellow-300 bg-clip-text text-transparent'>
        {t('whatILike')}
      </SectionTitle>
      <div className='mt-10 grid grid-cols-[repeat(2,_400px)] grid-rows-[350px_1fr] justify-center gap-x-20 gap-y-8'>
        <EditorUI
          setIconActive={setIconActive}
          icons={likeToDoList}
          itemIndex={itemIndex}
          setAccordionName={setAccordionName}
        />
        <section className='flex w-full flex-col items-start gap-4'>
          <div className='flex flex-col gap-4'>
            {likeToDoList.map((item) => (
              <LikeToDoItem
                key={item.title}
                item={item}
                iconActive={iconActive}
                accordionName={accordionName}
              />
            ))}
          </div>
          <div className='flex items-center gap-4'>
            <Button
              className='w-fit rounded-full bg-neutral-800 text-white shadow transition hover:text-neutral-800 active:bg-neutral-300'
              onClick={() => {
                setShouldPauseInterval(true)
                if (itemIndex === 0) {
                  const lastIndex = likeToDoList.length - 1
                  setAccordionName(likeToDoList[lastIndex].title)
                  setIconActive(likeToDoList[lastIndex].title)
                  setItemIndex(lastIndex)
                  return
                }
                setItemIndex(itemIndex - 1)
              }}>
              <GrPrevious />
            </Button>
            <Button
              className='w-fit rounded-full bg-neutral-800 text-white shadow transition hover:text-neutral-800 active:bg-neutral-300'
              onClick={() => {
                setShouldPauseInterval(true)
                if (itemIndex === likeToDoList.length - 1) {
                  setAccordionName(likeToDoList[0].title)
                  setIconActive(likeToDoList[0].title)
                  setItemIndex(0)
                  return
                }
                setItemIndex(itemIndex + 1)
              }}>
              <GrNext />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
