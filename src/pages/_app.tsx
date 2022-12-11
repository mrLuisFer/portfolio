import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from 'src/components/common/Layout'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from 'src/styles/global/globalStyle'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'src/styles/global/theme'
import '../styles/global/globals.css'
import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'
import ga from '../lib/ga'

const styledTheme: DefaultTheme = {
  colors: {},
}

export default function AppPage({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter()

  useEffect(() => {
    const path: string = router?.pathname
    if (path !== '/') {
      router.push('/')
    }
  }, [])

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

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='Porfolio React Portfolio React and Typescript Website Frontend JavaScript mrLuisFer Luis Alvarez Github'
        />
        <meta name='author' content='mrLuisFer' />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS}`}
          strategy='afterInteractive'
        />
        <Script strategy='afterInteractive' id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.ANALYTICS});
          `}
        </Script>
      </Head>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={styledTheme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
      <Script src='https://kit.fontawesome.com/0b9946e474.js' crossOrigin='anonymous' />
    </>
  )
}
