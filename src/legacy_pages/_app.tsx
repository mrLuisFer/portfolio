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
import { Analytics } from '@vercel/analytics/react'

import '../../node_modules/react-grid-layout/css/styles.css'
import { useChristmasDate } from '../hooks/useChristmasDate'
import { useAnalytics } from '../hooks/useAnalytics'

const styledTheme: DefaultTheme = {
  colors: {},
}

function AppPage({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter()
  const isChristmas = useChristmasDate()
  useAnalytics(router)

  return (
    <>
      <Head>
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
      </Head>
      {isChristmas && <script id='snowEffect' defer src='https://app.embed.im/snow.js' />}
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={styledTheme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
            <Analytics />
            <noscript>
              <iframe
                src='https://www.googletagmanager.com/ns.html?id=GTM-PBHNMXT'
                height='0'
                width='0'
                style={{
                  display: 'none',
                  visibility: 'hidden',
                }}
              ></iframe>
            </noscript>
          </Layout>
        </ThemeProvider>
      </ChakraProvider>
      <Script src='https://kit.fontawesome.com/0b9946e474.js' crossOrigin='anonymous' />
      <Script
        id='tagmanager'
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

      <Script id='dataLayer'>
        {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
          (window,document,'script','dataLayer','GTM-PBHNMXT')
          `}
      </Script>
      <Script id='Analytics'>
        {`
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', ${process.env.ANALYTICS}, 'auto');  // Creates a tracker.
          ga('send', 'pageview');             // Sends a pageview.
          `}
      </Script>
    </>
  )
}

export default AppPage
