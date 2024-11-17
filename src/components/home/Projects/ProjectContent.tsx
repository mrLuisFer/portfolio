import Image from 'next/image'
import { Project } from './projectsList'
import { Badge } from '@/components/ui/badge'

function ProjectTechnology({ children }: { children: React.ReactNode }) {
  return <Badge className='flex gap-1 hover:bg-blue-300'>{children}</Badge>
}

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <a key={project.id} href={project.link} target='_blank' rel='noopener noreferrer'>
      {project.image && (
        <picture>
          <Image
            src={project.image}
            alt={project.name}
            className='w-full rounded-tl-lg rounded-tr-lg object-cover'
            width={350}
            height={200}
          />
        </picture>
      )}
      <section className='flex flex-col gap-4 p-4'>
        <h2 className='text-xl font-bold'>{project.name}</h2>
        <p className='text-justify text-sm opacity-70 transition group-hover:opacity-100 md:text-base'>
          {project.description}
        </p>
      </section>
      <section className='flex flex-wrap items-center justify-evenly gap-5 px-4 pb-5'>
        {project.technologies.map((tech, id) => (
          <ProjectTechnology key={id}>
            <tech.icon />
            {tech.name}
          </ProjectTechnology>
        ))}
      </section>
    </a>
  )
}
