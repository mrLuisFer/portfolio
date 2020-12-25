import { useState, useEffect } from "react"

export function useLoader(): Boolean {
  const [loader, setLoader] = useState<Boolean>(true)

  // A set timeout for put the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      // Remove the loader
      setLoader(false)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  return loader
}
