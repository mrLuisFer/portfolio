import {
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Portal,
} from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Tooltip from '../../custom/Tooltip'
import { useTranslation } from 'src/hooks/useTranslation'
import { useState, useEffect, useRef, RefObject } from 'react'
import { localesList, TLocale } from 'src/constants/locales'
import { useRouter } from 'next/router'

export default function ChangeLang() {
  const [selectedLang, setSelectedLang] = useState<TLocale>({
    value: 'en',
    flag: '/assets/navbar/us.svg',
  })
  const { t, changeLanguage } = useTranslation()
  const router = useRouter()

  const handleChangeLang = (locale: TLocale) => {
    changeLanguage(locale.value)
    setSelectedLang(locale)
  }

  useEffect(() => {
    const routerLocale = router.locale
    const localeFiltered: TLocale[] = localesList.filter(
      (locale) => locale.value === routerLocale
    )
    setSelectedLang(localeFiltered[0])
  }, [router.locale])

  return (
    <>
      <Popover placement='bottom'>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Box
                as='button'
                gap='5px'
                borderRadius='15px'
                padding='10px'
                cursor='pointer'
                boxShadow={isOpen ? '1px 2px 5px rgb(79, 79, 79)' : ''}
                _hover={{
                  boxShadow: '1px 2px 5px rgb(53, 53, 53)',
                }}
                _active={{
                  boxShadow: '1px 2px 5px rgb(79, 79, 79)',
                }}>
                <Tooltip label={t('changeLanguage')}>
                  <Box display='flex' alignItems='center'>
                    {selectedLang?.value?.toUpperCase()}
                    <Box transform={isOpen ? 'rotate(180deg)' : ''}>
                      <MdKeyboardArrowDown />
                    </Box>
                  </Box>
                </Tooltip>
              </Box>
            </PopoverTrigger>
            <Portal>
              <PopoverContent
                background='black'
                border='none'
                boxShadow='2px 2px 10px rgb(114, 114, 114)'
                fontWeight='bold'
                w='80px'>
                <PopoverArrow bg='black' />
                <PopoverBody p='0' borderRadius='15px'>
                  <Box
                    borderRadius='15px'
                    top='3rem'
                    zIndex='9'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    background='black'
                    alignItems='center'
                    alignContent='center'
                    right='0'
                    left='0'>
                    {localesList
                      .filter((locale) => locale.value !== selectedLang?.value)
                      .map((locale) => (
                        <Box
                          key={locale.value}
                          p='10px 5px'
                          w='100%'
                          textAlign='center'
                          _hover={{
                            background: 'rgb(18, 18, 18)',
                          }}
                          cursor='pointer'
                          display='flex'
                          alignItems='center'
                          justifyContent='center'
                          gap='5px'
                          onClick={() => handleChangeLang(locale)}>
                          <Text fontSize='lg'>{locale.value.toUpperCase()}</Text>
                        </Box>
                      ))}
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </>
        )}
      </Popover>
    </>
  )
}
