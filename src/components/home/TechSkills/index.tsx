'use client'
import TechItem from './TechItem'
import { minorTechList, techIconsList } from './techIconsList'
import { useTranslation } from 'src/hooks/useTranslation'

export default function TechSkills() {
  const { t } = useTranslation()

  return (
    <div className='pb-8'>
      <div className='mb-4 text-center text-4xl font-bold'>{t('techSkills')}</div>
      <div className='mx-auto mt-4 flex max-w-screen-md flex-wrap items-center justify-evenly gap-9'>
        {techIconsList.map((item, id) => (
          <TechItem key={id} item={item} />
        ))}
      </div>
      <section className='mt-10 flex items-center justify-center gap-6'>
        <p>And much more...</p>
        <div className='flex items-center gap-4'>
          {minorTechList.map((item, id) => (
            <div key={id} className='text-[30px] opacity-55 transition hover:opacity-100'>
              {item.icon}
            </div>
          ))}
        </div>
      </section>
      <p className='mt-8 text-center text-base font-semibold capitalize text-white opacity-50 transition hover:opacity-70'>
        {t('andLearningMore')}...
      </p>
    </div>
  )
}
