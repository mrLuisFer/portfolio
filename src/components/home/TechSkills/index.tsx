'use client'
import { Button } from '@/components/ui/button'
import TechItem from './TechItem'
import { minorTechList, techIconsList } from './techIconsList'
import { useTranslation } from 'src/hooks/useTranslation'
import SectionTitle from '@/components/common/SectionTitle'
import { TooltipContent, TooltipTrigger, Tooltip } from '@radix-ui/react-tooltip'
import { SocialMedia } from '@/constants/socialMedia'

export default function TechSkills() {
  const { t } = useTranslation()

  return (
    <div>
      <SectionTitle
        glowProps={{ color: '#0059ff59', width: '100%' }}
        className='text-blue-300 hover:text-blue-400'>
        {t('techSkills')}
      </SectionTitle>
      <div className='mx-auto mt-4 flex max-w-screen-md flex-wrap items-center justify-evenly gap-9'>
        {techIconsList.map((item, id) => (
          <TechItem key={id} item={item} />
        ))}
      </div>
      <section className='mt-10 flex items-center justify-center gap-6'>
        <p className='text-sm lowercase opacity-60 transition hover:opacity-70'>
          Also...
        </p>
        <div className='flex items-center gap-4'>
          {minorTechList.map((item, id) => (
            <Tooltip key={id}>
              <TooltipTrigger>
                <div key={id} className='text-[30px] transition'>
                  {item.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className='rounded-md border-2 border-neutral-800 bg-neutral-900 px-2 py-1 text-sm opacity-70'>
                  {item.label}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </section>
      <Button asChild className='w-fit'>
        <a
          href={SocialMedia.github}
          className='mt-8 inline-block text-center text-base capitalize transition md:mx-auto md:flex md:items-center md:justify-center'
          target='_blank'
          rel='noopener noreferrer'>
          And learning much more... 🚀
        </a>
      </Button>
    </div>
  )
}
