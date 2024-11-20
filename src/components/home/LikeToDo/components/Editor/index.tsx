import { Dispatch, SetStateAction, useState, useEffect, useMemo, ReactNode } from 'react'
import EditorHeader from './components/Header'
import EditorContent from './components/Content'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

interface LikeTodo {
  title: string
  value: string
  icon: ReactNode
}

export default function Editor({
  setIconActive,
  icons,
  itemIndex = 0,
  setAccordionName,
}: {
  setIconActive: Dispatch<SetStateAction<string>>
  icons: LikeTodo[]
  itemIndex?: number
  setAccordionName: Dispatch<SetStateAction<string>>
}) {
  const [iconIndex, setIconIndex] = useState(0)
  const currentIcon = useMemo(() => icons[iconIndex]?.icon, [icons, iconIndex])

  const url: string =
    (typeof window !== 'undefined' && window.location.origin) || 'http://localhost:3000'
  const [editorUrl, setEditorUrl] = useState<string>(url)

  const handleClickIcon = () => {
    const number = getRandomInt(icons.length)
    setIconIndex(number)
    setIconActive(icons[number].title)
    setEditorUrl(url)
  }

  useEffect(() => {
    setIconIndex(itemIndex)
    setIconActive(icons[itemIndex].title)
    setAccordionName(icons[itemIndex].title)
  }, [icons, itemIndex, setAccordionName, setIconActive])

  return (
    <div className='mx-auto w-[300px] select-none rounded-md border border-gray-600 bg-black shadow-lg md:mx-0 md:w-full md:max-w-[450px]'>
      <EditorHeader
        editorUrl={editorUrl}
        setEditorUrl={setEditorUrl}
        handleClickIcon={handleClickIcon}
      />
      <EditorContent icon={currentIcon} editorUrl={editorUrl} />
    </div>
  )
}
