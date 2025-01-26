import Image from 'next/image'
import ProjectTechnologies from './ProjectTechnologies'
import { GitHubRepository } from '@/types/GitHubRepository'

export default function ProjectContent({ project }: { project: GitHubRepository }) {
  return (
    <a key={project.id} href={project.html_url} target='_blank' rel='noopener noreferrer'>
      {/*{project.image && (*/}
      {/*  <picture>*/}
      {/*    <Image*/}
      {/*      src={project.image}*/}
      {/*      alt={project.name}*/}
      {/*      className='w-full rounded-tl-lg rounded-tr-lg object-cover'*/}
      {/*      width={350}*/}
      {/*      height={200}*/}
      {/*    />*/}
      {/*  </picture>*/}
      {/*)}*/}
      <section className='flex flex-col gap-4 p-4'>
        <h2 className='text-xl font-bold capitalize'>{project.name}</h2>
        <p className='text-justify text-sm opacity-70 transition group-hover:opacity-100 md:text-base'>
          {project.description}
        </p>
      </section>
      <ProjectTechnologies project={project} />
    </a>
  )
}
