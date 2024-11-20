import { Project } from './projectsList'
import { Separator } from '@/components/ui/separator'
import ProjectFooter from './ProjectFooter'
import ProjectContent from './ProjectContent'

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className='group h-auto w-full rounded-lg border-2 border-neutral-900 bg-gradient-to-t from-neutral-950 to-neutral-800 transition hover:border-blue-600 md:w-[500px] lg:w-full'>
      <ProjectContent project={project} />
      <Separator />
      <ProjectFooter project={project} />
    </div>
  )
}
