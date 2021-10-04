import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Member = ({ img, name, role, description, school }) => {
  return (
    <div className='member'>
      <div className='member-container'>
        <div className='card-photo'>
          <img src={img} alt='slika' />
        </div>
        <div className='card-details'>
          <h3>{name}</h3>
          <h4>{role}</h4>
          <p>{description}</p>
          <h6>{school}</h6>
        </div>
      </div>
    </div>
  )
}

export default Member
