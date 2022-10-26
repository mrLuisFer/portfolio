import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Error(): JSX.Element {
  const router = useRouter()

  return (
    <>
      <p>error in {router.pathname}</p>
      <Image
        src='/assets/404/404.svg'
        alt='404'
        title={`Error 404 in ${router.pathname}`}
        loading='lazy'
        draggable='false'
        width='200px'
        height='200px'
      />
    </>
  )
}
