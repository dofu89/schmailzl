import React from 'react'
import logo from '../../imgs/schmailzl-logo.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1>Ihr ambulanter Pflegedienst Andrea Schmailzl</h1>
      <div className='hero'>
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
