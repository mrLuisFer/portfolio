import { Badge } from '@/components/ui/badge'
import { Project } from '../projectsList'
import { icons } from './technologies'

export function ProjectTechnology({ children }: { children: React.ReactNode }) {
  return <Badge className='flex gap-1 hover:bg-blue-200'>{children}</Badge>
}

export default function ProjectTechnologies({ project }: { project: Project }) {
  return (
    <section className='flex items-start gap-4 px-4 pb-5'>
      <p className='inline-block text-sm font-medium opacity-70 hover:opacity-100'>
        Technologies:
      </p>
      <div className='flex flex-wrap items-center gap-5'>
        {project.technologies.map((tech, id) => (
          <ProjectTechnology key={id}>
            {icons[tech]} <span className='text-xs font-normal capitalize'>{tech}</span>
          </ProjectTechnology>
        ))}
      </div>
    </section>
  )
}
