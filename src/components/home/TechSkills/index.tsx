'use client'
import { Button } from '@/components/ui/button'
import TechItem from './TechItem'
import { minorTechList, techIconsList } from './techIconsList'
import { useTranslation } from 'src/hooks/useTranslation'
import { SocialMedia } from '@/constants/socialLinks'
import GlowBox from '@/components/common/GlowBox'

export default function TechSkills() {
  const { t } = useTranslation()

  return (
    <div className='pb-8'>
      <section className='tems-center flex justify-center'>
        <GlowBox color='#0059ff59' width='100%'>
          <div className='mb-4 inline-block text-center text-4xl font-bold text-blue-300 transition hover:text-blue-400'>
            {t('techSkills')}
          </div>
        </GlowBox>
      </section>
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
            <div key={id} className='text-[30px] transition'>
              {item.icon}
            </div>
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
