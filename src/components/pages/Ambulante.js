import React, { useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'

import ambulanteData from '../../data/ambulante-data'

const Ambulante = () => {
  useEffect(() => {
    aos.init({
      duration: 2000,
    })
  }, [])
  return (
    <div className='ambulante'>
      <div data-aos='fade-in' className='ambulante-container'>
        <h1>Ambulante Pflege</h1>
        <h5> ..oder doch lieber eine stationäre Einrichtung?</h5>
        <div className='ambulante-content'>
          {ambulanteData.map((value, index) => {
            return (
              <div key={index}>
                <h3>{value.title}</h3>
                <hr />
                <p>{value.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Ambulante
