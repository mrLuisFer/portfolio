import { Box } from '@chakra-ui/react'
import Title from '../../../common/custom/Title'
import GradientBtn from '../../../common/custom/GradientBtn'
import Paragraph from '../../../common/custom/Paragraph'
import { useTranslation } from 'src/hooks/useTranslation'

export default function AboutResume(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Box mt='8rem'>
      <Title
        id='about'
        colorscheme='pink'
        fontSize='5xl'
        textAlign='center'
        helperText={t('informationAboutWhatILove') || ''}
      >
        {t('aboutMe')}
      </Title>
      <Box
        display='flex'
        alignItems='flex-start'
        justifyContent='center'
        gap='2rem'
        mt='2rem'
        flexDirection={['column', 'row']}
        textAlign={['justify', 'left']}
        padding={['0 1rem', '0']}
      >
        <Paragraph>
          {t('hiMyNameIs')}{' '}
          <a href='https://github.com/mrLuisFer'>Luis Fernando Alvarez</a>{' '}
          {t('heroIam').toLowerCase()} <span>{t('softwareDeveloper')}</span>,{' '}
          {t('focusedOn')} <span>{t('heroJob')}</span>, {t('iLikeTo')}{' '}
          <span>{t('learn')}</span> {t('thisILoveText')}.
        </Paragraph>
        <Box maxW='488px' lineHeight={1.6}>
          <Paragraph mb='2rem'>
            {t('alsoAStudent')} <span>{t('worldOfProgramming')}</span>,{' '}
            {t('learningNewTech')}
          </Paragraph>
          <Box display={['flex', 'block']} justifyContent={['center', 'flex-start']}>
            <GradientBtn
              colorscheme='blue'
              href='/cv-resume.pdf'
              asLink
              download
              iconComponent={<i className='fas fa-cloud-download-alt' />}
              padding={['0.2rem 0.2rem', '0.7rem 0.2rem']}
            >
              {t('downloadMyCV')}
            </GradientBtn>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
