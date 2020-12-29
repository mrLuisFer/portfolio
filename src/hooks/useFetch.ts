import { useEffect, useState, useRef } from "react"

export const useFetch = (url: string) => {
  const cache: React.MutableRefObject<any> = useRef<Array<Object>>([])

  const [status, setStatus] = useState<string>("fetching")
  const [data, setData] = useState<Array<Object>>([])

  useEffect(() => {
    if (!url) return

    // Fetching the data
    const fetchData = async () => {
      setStatus("fetching")

      // Check if the data was in the cache
      if (cache.current[url]) {
        const data: Array<Object> = cache.current[url]
        setData(data)
        setStatus("fetched")
      } else {
        const response: Response = await fetch(url)
        const data: Array<Object> = await response.json()
        cache.current[url] = data // set response in cache;
        setData(data)
        setStatus("fetched")
      }
    }

    fetchData()
  }, [url])

  return { status, data }
}
