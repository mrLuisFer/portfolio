import { useLoader } from '../../hooks/useLoader'

import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'

import '../../styles/components/Loaders/loader.css'

import { SCardsContainer } from './CardsContainer.styles'

export default function CardsContainer(): JSX.Element {
  const loader = useLoader()

  return (
    <SCardsContainer>
      {loader ? (
        <div className='loader'>Loading...</div>
      ) : (
        <>
          <Skills />
          <Projects />
          <Services />
        </>
      )}
    </SCardsContainer>
  )
}
