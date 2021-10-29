import { useLocation, useHistory } from 'react-router-dom'
import ErrorSvg from 'src/assets/404/404.svg'
import {
  ErrorImg,
  ErrorTxt,
  TitleMobile,
  ErrorBtn,
  ErrorContainer,
  TitleDesktop,
} from './Error.styles'

export default function Error(): JSX.Element {
  const history = useHistory()
  const location = useLocation()
  const pathname: string = location?.pathname

  const sendToRootUrl = () => {
    history.push('/')
  }

  return (
    <ErrorContainer>
      <TitleMobile>Oops!</TitleMobile>
      <ErrorImg
        src={ErrorSvg}
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
