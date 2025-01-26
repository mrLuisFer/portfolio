import { Separator } from '@/components/ui/separator'
import ProjectFooter from './ProjectFooter'
import ProjectContent from './ProjectContent'
import { GitHubRepository } from '@/types/GitHubRepository'

export default function ProjectItem({ project }: { project: GitHubRepository }) {
  return (
    <div className='group h-auto w-full rounded-lg border-2 border-neutral-900 bg-gradient-to-t from-neutral-950 to-neutral-900 transition hover:border-blue-600 md:w-[500px] lg:w-full filter hover:scale-105'>
      <ProjectContent project={project} />
      <Separator />
      <ProjectFooter project={project} />
    </div>
  )
}
