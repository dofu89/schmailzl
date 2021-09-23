import React, { useEffect } from 'react'
import logo from '../../imgs/schmailzl-logo.png'
import aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  useEffect(() => {
    aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <div className='hero-container'>
      <h1 data-aos='fade-in'>Ihr ambulanter Pflegedienst Andrea Schmailzl</h1>
      <div data-aos='fade-in' className='hero'>
        <img src={logo} alt='logo' />
      </div>
      <div class='custom-shape-divider-bottom-1632228016'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
            class='shape-fill'
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
