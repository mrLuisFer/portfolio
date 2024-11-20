// References:
// - https://dev.to/salimzade/handle-media-query-in-react-with-hooks-3cp3
// - https://mui.com/material-ui/react-use-media-query/
import { useState, useEffect } from 'react'

/** Define the hook with 'query' parameter typed as a string
 * @example const isMobile = useMediaQuery('(max-width: 600px)')
 * @param {string} query - The media query to match
 * @returns {boolean} - The result of the media query
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    // Define the listener as a separate function to avoid recreating it on each render
    const listener = () => setMatches(media.matches)

    // Use 'change' instead of 'resize' for better performance
    media.addEventListener('change', listener)

    // Cleanup function to remove the event listener
    return () => media.removeEventListener('change', listener)
  }, [matches, query]) // Only recreate the listener when 'matches' or 'query' changes

  return matches
}
