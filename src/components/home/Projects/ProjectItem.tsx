import Image from 'next/image'
import { Project } from './projectsList'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { Separator } from '@/components/ui/separator'
import ProjectFooter from './ProjectFooter'
import { Badge } from '@/components/ui/badge'
import ProjectContent from './ProjectContent'

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className='group h-auto w-full rounded-lg border-2 border-neutral-900 bg-gradient-to-t from-neutral-950 to-neutral-800 transition hover:border-blue-600'>
      <ProjectContent project={project} />
      <Separator />
      <ProjectFooter project={project} />
    </div>
  )
}
