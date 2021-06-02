import React from 'react'

type TProjectsCard = {
  title: string
  description: string
  repoUrl: string
  previewUrl?: string
  contributors: string[]
}

export default function ProjectsCard({
  title,
  description,
  repoUrl,
  previewUrl = '',
  contributors = [],
}: TProjectsCard): JSX.Element {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {contributors.map((contributor) => (
          <p key={contributor}>{contributor}</p>
        ))}
      </div>
      <div>
        <a href={repoUrl}>Url</a>
        <a href={previewUrl}>preview</a>
      </div>
    </div>
  )
}
