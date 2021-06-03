import React from 'react'
import { TProjects } from '../projects.d'

export default function ProjectsCard({
  title,
  description,
  repo,
  preview = '',
  contributors = [],
}: TProjects): JSX.Element {
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
        <a href={repo}>Url</a>
        <a href={preview}>preview</a>
      </div>
    </div>
  )
}
