import {
  ErrorImg,
  ErrorTxt,
  TitleMobile,
  ErrorBtn,
  ErrorContainer,
  TitleDesktop,
} from 'src/styles/components/Error.styles'
import { useRouter } from 'next/router'

export default function Error(): JSX.Element {
  const router = useRouter()

  const pathname: string = router.asPath

  const sendToRootUrl = () => {
    router.push('/')
  }

  return (
    <ErrorContainer>
      <TitleMobile>Oops!</TitleMobile>
      <ErrorImg
        src='assets/404/404.svg'
        alt='404'
        title={`Error 404 in ${pathname}`}
        loading='lazy'
        draggable='false'
      />
      <article>
        <TitleDesktop>Oops!</TitleDesktop>
        <ErrorTxt>
          Some error in <span>{pathname}</span>
        </ErrorTxt>
        <ErrorBtn type='button' onClick={sendToRootUrl}>
          Go back to home!
        </ErrorBtn>
      </article>
    </ErrorContainer>
  )
}
