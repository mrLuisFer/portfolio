import { useRouter } from 'next/router'
import Image from 'next/image'
import { useTranslation } from 'src/hooks/useTranslation'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

export default function Error(): JSX.Element {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='rounded-xl border-2 border-gray-600 p-4 hover:border-gray-100'>
        <h2 className='text-center font-bold'>Error {router.pathname}</h2>
        <Image
          src='/assets/404/404.svg'
          alt='404'
          title={`Error 404 in ${router.pathname}`}
          loading='lazy'
          draggable='false'
          width={300}
          height={300}
        />
        <div className='flex w-full justify-center'>
          <Link
            href='/'
            className='flex items-center gap-2 text-center font-bold transition-colors hover:text-white'>
            <BsArrowLeft />
            {t('BackToHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
