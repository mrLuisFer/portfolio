import { OctokitResponse } from '@octokit/types'
import { useEffect, useState, useCallback } from 'react'
import { octokit } from 'src/utils/octokitVar'

import type { ProjectData } from './projects.d'
import { ProjectsStyled, ProjectsFlex } from './Projects.styles'
import ProjectCard from './ProjectCard'
import CardTitle from '../CardsTitle/CardTitle'

export default function Projects(): JSX.Element {
  const [requestStatus, setRequestStatus] = useState<number>(200)
  const [projects, setProjects] = useState<Array<ProjectData>>([])

  const getData = useCallback(async () => {
    const url: string = 'GET /users/{username}/repos'
    const headers = {
      username: 'mrLuisFer',
    }

    const response: OctokitResponse<any> = await octokit.request(url, headers)
    setRequestStatus(response.status)
    setProjects(response.data)
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <ProjectsStyled id='projects'>
      <CardTitle titleSpan='Projects:' marginBottom='2rem' withMarginBottom />
      <section>
        {requestStatus !== 200 ? (
          <div>
            <h1>An error fetching data</h1>
          </div>
        ) : (
          <ProjectsFlex>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectsFlex>
        )}
      </section>
    </ProjectsStyled>
  )
}
