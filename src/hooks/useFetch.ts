import { useEffect, useState, useRef } from "react"

export const useFetch = (url: string) => {
  const cache: React.MutableRefObject<any> = useRef({})

  const [status, setStatus] = useState("fetching")
  const [data, setData] = useState([])

  useEffect(() => {
    if (!url) return
    const fetchData = async () => {
      setStatus("fetching")

      if (cache.current[url]) {
        const data = cache.current[url]
        setData(data)
        setStatus("fetched")
      } else {
        const response = await fetch(url)
        const data = await response.json()
        cache.current[url] = data // set response in cache;
        setData(data)
        setStatus("fetched")
      }
    }

    fetchData()
  }, [url])

  return { status, data }
}
