import { useEffect } from 'react'
import ga from '../lib/ga'
import { NextRouter } from 'next/router'

export const useAnalytics = (router: NextRouter) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url, document.title, router.asPath || router.pathname)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.asPath, router.events, router.pathname])
}
