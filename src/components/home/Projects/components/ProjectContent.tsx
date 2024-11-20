import Image from 'next/image'
import { Project } from '../constants/projectsList'
import ProjectTechnologies from './ProjectTechnologies'

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
      <ProjectTechnologies project={project} />
    </a>
  )
}
