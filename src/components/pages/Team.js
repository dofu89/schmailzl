import React from 'react'
import Member from '../../data/Member'
import { team } from '../../data/team'
import Carousel from 'react-elastic-carousel'

import aos from 'aos'
import 'aos/dist/aos.css'

const teamData = team.map((member) => (
  <Member
    key={member.id}
    img={member.img}
    name={member.name}
    role={member.role}
    description={member.description}
    school={member.school}
  />
))

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 480, itemsToShow: 2 },
  { width: 767, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
]

const Team = () => {
  return (
    <div className='team' data-aos='fade-in'>
      <h1>Unsere Team</h1>
      <div className='team-container'>
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          //enableAutoPlay={true}
          //autoPlaySpeed={5000}
        >
          {teamData}
        </Carousel>
      </div>
    </div>
  )
}

export default Team
