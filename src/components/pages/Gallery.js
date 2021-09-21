import React from 'react'
import ImageGallery from 'react-image-gallery'

import img1 from '../../imgs/img1.jpg'
//import img2 from '../../imgs/img2.jpg'
//import img3 from '../../imgs/img3.jpg'

import img4 from '../../imgs/img4.jpg'
import img5 from '../../imgs/img5.jpg'
import img6 from '../../imgs/img6.jpg'
import img7 from '../../imgs/img7.jpg'
import img8 from '../../imgs/img8.jpg'

const images = [
  {
    original: img1,
  },
  /*{
    original: img2,
  },
  {
    original: img3,
  },*/
  {
    original: img4,
  },
  {
    original: img5,
  },
  {
    original: img6,
  },
  {
    original: img7,
  },
  {
    original: img8,
  },
]

const Gallery = () => {
  return (
    <ImageGallery
      items={images}
      infinite={true}
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
      slideDuration={4000}
      slideInterval={8000}
      sizes={{ height: 300, width: 300 }}
    />
  )
}

export default Gallery
