import NavBar from 'src/components/common/NavBar/NavBar'
import Footer from 'src/components/common/Footer'
import { Container } from '@chakra-ui/react'

export default function Layout({ children }: { children: any }): JSX.Element {
  return (
    <Container maxW='container.xl'>
      <NavBar />
      {children}
      <Footer />
    </Container>
  )
}
