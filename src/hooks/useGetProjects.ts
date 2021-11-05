import { useState, useEffect, useCallback } from 'react'
import { OctokitResponse } from '@octokit/types'
import { octokit } from 'src/utils/octokitVar'

import type { ProjectData } from 'src/components/CardsContainer/Projects/projects.d'

export const useGetProjects = () => {
  const [projects, setProjects] = useState<Array<ProjectData>>([])
  const [requestStatus, setRequestStatus] = useState<number>(200)

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

  return {
    projects,
    setProjects,
    requestStatus,
    setRequestStatus,
  }
}
