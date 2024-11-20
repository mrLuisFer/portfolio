'use client'
import { useTranslation } from 'src/hooks/useTranslation'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionTitle from '@/components/common/SectionTitle'
import { Button } from '@/components/ui/button'
import ProjectItem from './components/ProjectItem'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import projectsList from './constants/projectsList'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <div className='pt-4'>
      <SectionTitle
        glowProps={{ color: '#ff590058', width: '100%' }}
        className='bg-gradient-to-tr from-orange-300 to-orange-200 bg-clip-text text-transparent'>
        {t('projects')}
      </SectionTitle>
      <div className='hidden lg:block'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter='20px'>
            {projectsList.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div className='flex flex-col flex-wrap items-center justify-center gap-4 px-5 md:gap-10 md:px-0 lg:hidden'>
        {projectsList.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <div className='mt-6 flex justify-center'>
        <Button asChild>
          <a
            href='https://github.com/mrLuisFer?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2'>
            {t('moreProjects')}
            <FiArrowUpRight />
          </a>
        </Button>
      </div>
    </div>
  )
}
