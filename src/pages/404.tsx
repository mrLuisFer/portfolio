import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'src/hooks/useTranslation'
import { BsArrowLeft } from 'react-icons/bs'

export default function Error(): JSX.Element {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Box minH='full' display='flex' alignItems='center' justifyContent='center'>
      <Box
        border='2px'
        borderColor='gray.600'
        _hover={{
          borderColor: 'gray.100',
        }}
        padding='15px 40px'
        borderRadius='xl'>
        <Text textAlign='center' fontWeight='bold'>
          Error {router.pathname}
        </Text>
        <Image
          src='/assets/404/404.svg'
          alt='404'
          title={`Error 404 in ${router.pathname}`}
          loading='lazy'
          draggable='false'
          width='300px'
          height='300px'
        />
        <Box width='full' display='flex' justifyContent='center'>
          <Text
            as='a'
            href='/'
            textAlign='center'
            fontWeight='bold'
            display='flex'
            alignItems='center'
            gap='2'
            _hover={{
              color: 'white',
            }}>
            <BsArrowLeft />
            {t('BackToHome')}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
