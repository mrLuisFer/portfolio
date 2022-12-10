import NavBar from 'src/components/common/NavBar'
import Footer from 'src/components/common/Footer'
import { Container } from '@chakra-ui/react'

export default function Layout({ children }: { children: any }): JSX.Element {
  return (
    <Container maxW='container.xl' overflowX='hidden'>
      <NavBar />
      {children}
      <Footer />
    </Container>
  )
}
