import { useEffect, useState, useRef, MutableRefObject } from 'react'

export const useFetch = (url: string) => {
  const cache: MutableRefObject<any> = useRef<Array<Object>>([])

  const [status, setStatus] = useState<string>('fetching')
  const [data, setData] = useState<Array<Object>>([])

  useEffect(() => {
    if (!url) return

    // Fetching the data
    const fetchData = async () => {
      setStatus('fetching')

      // Check if the data was in the cache
      if (cache.current[url]) {
        const currentData: Array<Object> = cache.current[url]
        setData(currentData)
        setStatus('fetched')
      } else {
        const response: Response = await fetch(url)
        const resData: Array<Object> = await response.json()
        cache.current[url] = data // set response in cache
        setData(resData)
        setStatus('fetched')
      }
    }

    fetchData()
  }, [data, url])

  return { status, data }
}
