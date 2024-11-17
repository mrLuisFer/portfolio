import NavBar from 'src/components/common/NavBar'
import Footer from 'src/components/common/Footer'
import ToTopButton from '../ToTopButton'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className='container mx-auto pt-5'>
      <NavBar />
      {children}
      <ToTopButton />
      <Footer />
    </div>
  )
}
