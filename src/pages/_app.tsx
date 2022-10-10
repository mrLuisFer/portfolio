import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from 'src/Layout'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import '../styles/global/globals.css'

const theme: DefaultTheme = {
  colors: {},
}

export default function AppPage({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Script src='https://kit.fontawesome.com/0b9946e474.js' crossOrigin='anonymous' />
      </ThemeProvider>
    </>
  )
}
