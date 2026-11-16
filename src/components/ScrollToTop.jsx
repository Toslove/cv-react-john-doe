
import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      className="btn btn-primary scroll-to-top"
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
      title="Retour en haut"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  )
}

export default ScrollToTop
