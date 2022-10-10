import { useLoader } from 'src/hooks/useLoader'

import Projects from './Projects/Projects'
import Services from './Services/Services'
import Skills from './Skills/Skills'

import { CardsContainerStyled } from './CardsContainer.styles'

export default function CardsContainer(): JSX.Element {
  const loader = useLoader()

  return (
    <CardsContainerStyled>
      {loader ? (
        <div className='loader'>Loading...</div>
      ) : (
        <>
          <Skills />
          <Projects />
          <Services />
        </>
      )}
    </CardsContainerStyled>
  )
}
