import React from 'react'

const Member = ({ img, name, role, description, school }) => {
  return (
    <div className='member'>
      <div className='member-container'>
        <div className='member-photo'>
          <img src={img} alt='slika' />
        </div>
        <div className='member-details'>
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
