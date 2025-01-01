import { BiUpArrow } from 'react-icons/bi'
import { Button } from '../ui/button'

export default function ToTopButton() {
  const handleToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Button
      onClick={handleToTop}
      className='fixed bottom-4 right-4 z-50 rounded-full border-2 border-neutral-800 bg-neutral-950 p-2 text-xl text-white hover:bg-neutral-800 active:bg-neutral-700'
      aria-label='Scroll to top'>
      <BiUpArrow />
    </Button>
  )
}
