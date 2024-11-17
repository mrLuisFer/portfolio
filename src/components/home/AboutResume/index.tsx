'use client'
import { useTranslation } from 'src/hooks/useTranslation'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'
import { Button } from '@/components/ui/button'
import GlowBox from '@/components/common/GlowBox'
import { HiDocumentArrowDown } from 'react-icons/hi2'
import SectionTitle from '@/components/common/SectionTitle'

export default function AboutResume(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div>
      <SectionTitle
        glowProps={{
          color: '#faa1f171',
        }}
        id='about'
        className='bg-gradient-to-tr from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent'>
        {t('aboutMe')}
      </SectionTitle>
      <div className='flex items-center justify-center'>
        <p className='inline-block text-sm text-white opacity-45 transition hover:opacity-70'>
          {t('informationAboutWhatILove')}
        </p>
      </div>
      <section className='mt-8 flex flex-col items-start justify-center gap-8 px-4 py-0 text-justify md:grid md:grid-cols-2 md:gap-24'>
        <p className='text-justify leading-relaxed'>
          Hi! I'm{' '}
          <a
            href='https://github.com/mrLuisFer'
            className='font-semibold text-blue-300 hover:text-blue-400'>
            Luis Fernando Alvarez
          </a>{' '}
          a{' '}
          <span className='font-semibold text-yellow-100 hover:text-yellow-200'>
            {t('softwareDeveloper')}
          </span>
          , I love to learn new things every day and put them into practice developing
          projects and applications that make me very happy to do what I love.
        </p>
        <p className='flex flex-col gap-5 leading-relaxed'>
          <span>
            I'm also a student & I love to learn about the{' '}
            <span className='font-semibold text-orange-200 hover:text-orange-300'>
              World of Programming
            </span>
            , learning new technologies, and doing freelance work and projects.
          </span>
          <span className='flex justify-center md:block md:justify-start'>
            <Button asChild>
              <a
                // className='rounded-md bg-blue-500 px-4 py-2 text-white'
                download
                href='/cv-resume.pdf'
                className='text-lg'>
                <HiDocumentArrowDown />
                You can download my resume here
              </a>
            </Button>
          </span>
        </p>
      </section>
    </div>
  )
}
