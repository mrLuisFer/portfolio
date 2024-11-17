'use client'
import { useState, useEffect } from 'react'
import EditorUI from './Editor'
import { getLikeToDoList } from './likeTodoList'
import { useTranslation } from 'src/hooks/useTranslation'
import GlowBox from '@/components/common/GlowBox'
import LikeToDoItem from './LikeToDoItem'
import SectionTitle from '@/components/common/SectionTitle'

export default function LikeToDo() {
  const [iconActive, setIconActive] = useState<string>('')
  const [accordionName, setAccordionName] = useState<string>('')
  const [itemIndex, setItemIndex] = useState<number>(0)

  const { t } = useTranslation()
  const likeToDoList = getLikeToDoList(t)

  useEffect(() => {
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
  }, [itemIndex, likeToDoList])

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
        <section className='flex min-h-[500px] w-full flex-col items-start gap-4 md:min-h-[600px]'>
          {likeToDoList.map((item) => (
            <LikeToDoItem
              key={item.title}
              item={item}
              iconActive={iconActive}
              accordionName={accordionName}
              setAccordionName={setAccordionName}
            />
          ))}
        </section>
      </div>
    </div>
  )
}
