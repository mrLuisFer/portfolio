import ProjectItem from '@/components/home/Projects/components/ProjectItem'
import { useEffect, useState } from 'react'
import { GitHubRepository } from '@/types/GitHubRepository'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const githubRepositories = 'https://api.github.com/users/mrLuisFer/repos?sort=updated&direction=desc'
export default function ProjectsList() {
  const [repositories, setRepositories] = useState<Array<GitHubRepository>>()

  const fetchRepositories = async () => {
    const response = await fetch(githubRepositories)
    const data: GitHubRepository[] = await response.json()
    if (!data && !Array.isArray(data)) return
    const repositoriesData = data.slice(0, 11)
    setRepositories(repositoriesData)
  }

  useEffect(() => {
    fetchRepositories().then(() => {
    })
  }, [])

  if (!repositories?.length) return (
    <div>
      <p>An error occurred fetching the projects</p>
    </div>
  )

  return (
    <>
      <div className="hidden lg:block">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="20px">
            {repositories?.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 px-5 md:gap-10 md:px-0 lg:hidden">
        {repositories?.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}
