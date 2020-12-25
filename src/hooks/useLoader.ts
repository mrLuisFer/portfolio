import { useState, useEffect } from "react"

export function useLoader(seconds: number = 700): Boolean {
  const [loader, setLoader] = useState<Boolean>(true)

  // A set timeout for put the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      // Remove the loader
      setLoader(false)
    }, seconds)
    return () => clearTimeout(timer)
  }, [seconds])

  return loader
}
