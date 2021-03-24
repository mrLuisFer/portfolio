export default function BtnToTop() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button className="BtnToTop" onClick={scrollToTop}>
      <i className="fas fa-arrow-up BtnToTop__arrow-icon"></i>
    </button>
  )
}
