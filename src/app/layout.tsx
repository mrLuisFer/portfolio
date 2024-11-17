'use client'
import { LanguageProvider } from '../context/languageContext'
import AppLayout from '../components/common/Layout'
import '../styles/globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className='relative overflow-x-hidden'>
        <LanguageProvider>
          <StyledComponentsRegistry>
            <TooltipProvider>
              <AppLayout>{children}</AppLayout>
            </TooltipProvider>
          </StyledComponentsRegistry>
        </LanguageProvider>
      </body>
    </html>
  )
}
