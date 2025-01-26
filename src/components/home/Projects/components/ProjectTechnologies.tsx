import { Badge } from '@/components/ui/badge'
import { Icon, icons } from '../constants/technologies'
import { GitHubRepository } from '@/types/GitHubRepository'
import { ReactNode } from 'react'

export function ProjectTechnology({ children }: { children: ReactNode }) {
  return <Badge className="flex gap-1 bg-opacity-50 bg-white">{children}</Badge>
}

export default function ProjectTechnologies({ project }: { project: GitHubRepository }) {
  if (!project.topics.length) return null

  return (
    <section className="flex items-start gap-4 px-4 pb-5">
      <p className="inline-block text-sm font-medium opacity-70 hover:opacity-100">
        Topics:
      </p>
      <div className="flex flex-wrap items-center gap-5">
        {project.topics.map((tech, id) => (
          <ProjectTechnology key={id}>
            {icons[tech.toLowerCase() as Icon]}
            <span className="text-xs font-normal lowercase">{tech}</span>
          </ProjectTechnology>
        ))}
      </div>
    </section>
  )
}
