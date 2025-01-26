'use client'
import { useTranslation } from 'src/hooks/useTranslation'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionTitle from '@/components/common/SectionTitle'
import { Button } from '@/components/ui/button'
import ProjectsList from '@/components/home/Projects/components/ProjectsList'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <div className="pt-4">
      <SectionTitle
        glowProps={{ color: '#ff590058', width: '100%' }}
        className="bg-gradient-to-tr from-orange-300 to-orange-200 bg-clip-text text-transparent">
        {t('projects')}
      </SectionTitle>
      <ProjectsList />
      <div className="mt-6 flex justify-center">
        <Button asChild>
          <a
            href="https://github.com/mrLuisFer?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            {t('moreProjects')}
            <FiArrowUpRight />
          </a>
        </Button>
      </div>
    </div>
  )
}
