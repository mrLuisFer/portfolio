import React from "react"
// Hooks
import { useFetch } from "../hooks/useFetch"
// Functions
import { truncate } from "../functions/truncate"

// In this component will be the call to the github api
export default function Projects(): JSX.Element {
  const url: string = "https://api.github.com/users/mrLuisFer/repos"
  const { status, data } = useFetch(url)

  const windowWidth: number = window.innerWidth
  let length: number = 0

  if (windowWidth <= 375) {
    length = 170
  } else if (windowWidth >= 375) {
    length = 160
  }

  console.log(data)

  return status === "fetching" ? (
    <div className="loader">Loading...</div>
  ) : (
    // Projects Section
    <div className="Projects" id="projects">
      <div className="Projects__flex">
        <h2 className="Projects__title">
          <i className="fas fa-angle-double-right"></i>
          <span>Projects:</span>
        </h2>
        <i className="fas fa-search Projects__search-icon"></i>
      </div>
      <div className="Projects__grid">
        {/* The cards of the data */}
        {data.map((project: any) => (
          <div key={project?.id} className="Projects__container">
            <h2>{project?.name}</h2>
            <p className="Projects__container-description">
              {truncate(project?.description, length)}
            </p>
            <a href={project?.html_url} target="_blank" rel="noreferrer">
              <i className="fab fa-github-alt"></i>{" "}
              <span>{project?.full_name}</span>
            </a>
            <br />
            <p className="Projects__container-date">
              <i className="far fa-calendar-alt"></i>{" "}
              {new Date(`${project.created_at}`).toDateString()}
            </p>
            <br />
            {project?.language?.length > 1 ? (
              <p className="Projects__container-lang">
                <i className="fas fa-file-code"></i>
                {project?.language}
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
