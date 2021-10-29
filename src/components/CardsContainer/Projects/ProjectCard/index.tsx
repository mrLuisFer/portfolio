import type { ProjectData } from '../projects'

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div>
      <p>{project.name}</p>
    </div>
  )
}
