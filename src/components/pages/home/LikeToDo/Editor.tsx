import { Box, Icon, Text } from '@chakra-ui/react'
import { VscDebugRestart } from 'react-icons/vsc'
import { BsCart3 } from 'react-icons/bs'
import { Dispatch, SetStateAction, useState, useEffect, FormEvent } from 'react'
import Tooltip from 'src/components/common/custom/Tooltip'
import { useTranslation } from 'src/hooks/useTranslation'

function IconCircle({ color }: { color: string }) {
  return (
    <Icon viewBox='0 0 200 200' color={color}>
      <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )
}

interface EditorSkeletonProps {
  children?: any
  w: string | number
  h: string | number
  bg: string
  m?: string
}

function EditorSkeleton({ children, w, h, bg, m }: EditorSkeletonProps) {
  return (
    <Box
      width={w}
      height={h}
      bg={bg}
      borderRadius='10px'
      m={m || '0'}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      {children}
    </Box>
  )
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

interface LikeTodo {
  title: string
  value: string
  icon: any
}

export default function Editor({
  setIconActive,
  icons,
  itemIndex = 0,
  setAccordionName,
  setHideEditor,
}: {
  setIconActive: Dispatch<SetStateAction<string>>
  icons: LikeTodo[]
  itemIndex?: number
  setAccordionName: Dispatch<SetStateAction<string>>
  setHideEditor: Dispatch<SetStateAction<boolean>>
}) {
  const [iconIndex, setIconIndex] = useState(0)
  const { t } = useTranslation()

  const url: string =
    (typeof window !== 'undefined' && window.location.origin) || 'http://localhost:3000'
  const [editorUrl, setEditorUrl] = useState<string>(url)

  const handleClickIcon = () => {
    const number = getRandomInt(icons.length)
    setIconIndex(number)
    setIconActive(icons[number].title)
    setEditorUrl(url)
  }

  useEffect(() => {}, [])

  useEffect(() => {
    setIconIndex(itemIndex)
    setIconActive(icons[itemIndex].title)
    setAccordionName(icons[itemIndex].title)
  }, [itemIndex])

  return (
    <Box
      border='1px solid'
      background='black'
      borderColor='gray.600'
      maxW='450px'
      borderRadius='5px'
    >
      <Box
        p='10px 15px'
        display='flex'
        alignItems='center'
        gap='0'
        border='1px solid'
        borderColor='gray.600'
      >
        <Box display='flex' gap='0.2rem' alignItems='center' mb='1rem'>
          <Tooltip label='Close' placement='top'>
            <Box
              cursor='pointer'
              display='inline-block'
              onClick={() => setHideEditor(true)}
            >
              <IconCircle color='red.500' />
            </Box>
          </Tooltip>
          <Box display='inline-block'>
            <IconCircle color='yellow.400' />
          </Box>
          <Box display='inline-block'>
            <IconCircle color='green.300' />
          </Box>
        </Box>
        <Box
          p='10px'
          bg='#111'
          borderRadius='10px'
          fontSize='12px'
          display='flex'
          m='0 auto'
          w='205px'
          alignItems='center'
          justifyContent='space-between'
          border='1px solid transparent'
          _hover={{
            borderColor: 'gray.600',
          }}>
          <Box
            as='input'
            value={editorUrl}
            bg='transparent'
            outline='none'
            border='none'
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setEditorUrl((e.target as HTMLInputElement).value)
            }}
          />
          <Tooltip label={t('reload')}>
            <Box
              cursor='pointer'
              p='5px'
              borderRadius='50%'
              onClick={handleClickIcon}
              _hover={{
                background: '#272727',
              }}
              _active={{
                background: '#2c2c2c',
              }}
            >
              <VscDebugRestart size={15} />
            </Box>
          </Tooltip>
        </Box>
      </Box>
      <Box p={['24px 10px', '24px']}>
        <Box
          display='grid'
          gridTemplateColumns='1fr 1fr'
          justifyContent='space-between'
          alignItems='flex-start'
          gap='1rem'
        >
          <Box display='flex' alignItems='flex-start' gap='0.5rem'>
            <Box
              bg='white'
              display='flex'
              alignItems='center'
              justifyContent='center'
              p='10px'
              borderRadius='50%'
              w='fit-content'
              color='black'
            >
              <BsCart3 />
            </Box>
            <Box display='flex' flexDirection='column' gap='0.5em'>
              <EditorSkeleton w='70px' h='7px' bg='white' />
              <EditorSkeleton w='90px' h='7px' bg='gray.700' />
            </Box>
          </Box>
          <Box display='flex' alignItems='center' gap='0.5rem'>
            <EditorSkeleton w='40px' h='7px' bg='gray.700' />
            <EditorSkeleton w='40px' h='7px' bg='gray.700' />
            <EditorSkeleton w='40px' h='7px' bg='gray.700' />
          </Box>
        </Box>
        <Box
          display='grid'
          marginTop='30px'
          gridTemplateColumns='1fr 1fr'
          justifyContent='space-between'
          alignItems='flex-start'
          gap='1rem'
        >
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            h={100}
            p='10px'
            borderRadius='5px'
            bg='#252525'
            color='white'
            _hover={{
              background: '#2f2f2f',
            }}
          >
            {icons[iconIndex].icon}
          </Box>
          <Box>
            <Box
              display='flex'
              alignItems='flex-start'
              w='100%'
              justifyContent='space-between'
            >
              <EditorSkeleton w='90px' h='30px' bg='gray.700' />
              <EditorSkeleton w='50px' h='20px' bg='blue.400'>
                <Text fontSize='12px'>$$$</Text>
              </EditorSkeleton>
            </Box>
            <Box mt='1rem'>
              <EditorSkeleton w='100%' h='100' bg='gray.700' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
