import NavBar from 'src/components/common/NavBar'
import Footer from 'src/components/common/Footer'

export default function AppLayout({ children }: { children: any }): JSX.Element {
  return (
    <div className='container mx-auto pt-5'>
      <NavBar />
      {children}
      {/*<Footer />*/}
    </div>
  )
}
