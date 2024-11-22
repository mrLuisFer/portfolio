'use client'
import { LanguageProvider } from '../context/languageContext'
import AppLayout from '../components/common/Layout'
import '../styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from '@vercel/analytics/react'
import { useChristmasDate } from '@/hooks/useChristmasDate'

const isOnDevEnv = process?.env?.NODE_ENV === 'development'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isChristmas = useChristmasDate()

  return (
    <html lang='en' className='dark'>
      <head>
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
        {isOnDevEnv && (
          <script src='https://unpkg.com/react-scan/dist/auto.global.js' async></script>
        )}
      </head>
      <body className='relative overflow-x-hidden'>
        <LanguageProvider>
          <StyledComponentsRegistry>
            <TooltipProvider>
              <AppLayout>{children}</AppLayout>
            </TooltipProvider>
          </StyledComponentsRegistry>
        </LanguageProvider>
        <Analytics />
        {isChristmas && (
          <script id='snowEffect' defer src='https://app.embed.im/snow.js' />
        )}
      </body>
    </html>
  )
}
