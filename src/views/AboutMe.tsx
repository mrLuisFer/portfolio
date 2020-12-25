import React from "react"
// Hooks
import { useLoader } from "../hooks/useLoader"

export default function AboutMe(): JSX.Element {
  const loader: Boolean = useLoader(500)

  return (
    <>
      {loader ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="AboutMe">
          <p>Hello</p>
        </div>
      )}
    </>
  )
}
