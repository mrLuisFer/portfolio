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
import { useEffect, useState } from 'react'
import ga from '../lib/ga'
import AnimatedCursor from 'react-animated-cursor'
import '../components/common/i18nNext'
import { appWithTranslation } from 'next-i18next'

import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'

const styledTheme: DefaultTheme = {
  colors: {},
}

function AppPage({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter()
  const [renderCursor, setRenderCursor] = useState(false)

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

  useEffect(() => {
    setRenderCursor(true)
  }, [])

  return (
    <>
      <Head>
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
        <Script>
          {`
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
          (window,document,'script','dataLayer','GTM-PBHNMXT');</script>
          `}
        </Script>
        <Script>
          {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', ${process.env.ANALYTICS}, 'auto');  // Creates a tracker.
          ga('send', 'pageview');             // Sends a pageview.
          `}
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='icon' href='/favicon.svg' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/favicon-16x16.png'
          />
        </Script>
      </Head>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={styledTheme}>
          <GlobalStyle />
          <Layout>
            {renderCursor && (
              <div className='cursor__dot'>
                <AnimatedCursor
                  innerSize={15}
                  outerSize={15}
                  color='255, 255 ,255'
                  outerAlpha={0.4}
                  innerScale={0.7}
                  outerScale={5}
                />
              </div>
            )}
            <Component {...pageProps} />
            <noscript>
              <iframe
                src='https://www.googletagmanager.com/ns.html?id=GTM-PBHNMXT'
                height='0'
                width='0'
                style={{
                  display: 'none',
                  visibility: 'hidden',
                }}></iframe>
            </noscript>
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
      <Script src='https://kit.fontawesome.com/0b9946e474.js' crossOrigin='anonymous' />
    </>
  )
}

export default appWithTranslation(AppPage)
