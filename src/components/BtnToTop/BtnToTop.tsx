import { SBtnToTop } from './BtnToTop.styles'

export default function BtnToTop() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <SBtnToTop onClick={scrollToTop} type='button'>
      <i className='fas fa-arrow-up' />
    </SBtnToTop>
  )
}
