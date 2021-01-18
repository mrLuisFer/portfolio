import React from "react"
// Hooks
import { useFetch } from "../hooks/useFetch"

// In this component will be the call to the github api
export default function Projects(): JSX.Element {
  const url: string = "https://api.github.com/users/mrLuisFer/repos"

  const { status, data } = useFetch(url)

  console.log(data)

  // @todo: Do more dynamic
  const truncate: Function = (str: string): string => {
    if (str.length >= 190) {
      return str.length > 10 ? str.substring(0, 190) + "..." : str
    } else {
      return str + ""
    }
  }

  return status === "fetching" ? (
    <div className="loader">Loading...</div>
  ) : (
    // Projects Section
    <div className="Projects">
      <div className="Projects__flex">
        <h2 className="Projects__title">
          <i className="fas fa-angle-double-right"></i>My <span>Projects:</span>
        </h2>
        <i className="fas fa-search Projects__search-icon"></i>
      </div>
      <div className="Projects__grid">
        {/* The cards of the data */}
        {data.map((project: any) => (
          <div key={project?.id} className="Projects__container">
            <h2>
              {project?.name}
              <i className="far fa-window-minimize"></i>
            </h2>
            <p className="Projects__container-description">
              {truncate(project?.description)}
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
