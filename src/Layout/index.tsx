import NavBar from 'src/components/NavBar/NavBar'
import Footer from 'src/components/Footer/Footer'

import { AppStyled, WavePattern } from './Layout.styles'

export default function Layout({ children }: { children: any }): JSX.Element {
  return (
    <AppStyled>
      <WavePattern
        src='/assets/wave-pattern.svg'
        alt='mrLuisFer wave style illustration for page top'
      />
      <NavBar />
      {children}
      <Footer />
    </AppStyled>
  )
}
