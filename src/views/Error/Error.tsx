import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Error(): JSX.Element {
  const location = useLocation()
  return (
    <div>
      <p>Some error in {location?.pathname}</p>
    </div>
  )
}
