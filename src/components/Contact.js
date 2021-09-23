import React, { useEffect } from 'react'
import logoContact from '../imgs/logo.png'
import Maps from './pages/Maps'
//import Mailto from 'react-mailto'

import { FaHome, FaPhone } from 'react-icons/fa/'
import { MdMailOutline } from 'react-icons/md'
import MDK from '../imgs/mdk-bewertung-white.png'
import aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    aos.init({
      duration: 2000,
    })
  }, [])

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : ''
    if (subject) params += `subject=${encodeURIComponent(subject)}`
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`

    return <a href={`mailto:${email}${params}`}>{children}</a>
  }
  return (
    <div className='contact'>
      <div data-aos='fade-in' className='contact-container'>
        <div className='contact-logo'>
          <img src={logoContact} alt='contact-img' />
          <img id='mdk' src={MDK} alt='mdk' />
        </div>
        <div className='contact-main'>
          <h2>SO ERREICHEN SIE UNS</h2>
          <div className='main-info'>
            <div className='single-info'>
              <div className='icon'>
                <FaHome size={20} style={{ color: '#28235d' }} />
              </div>
              <div>
                <p>Ambulante Krankenpflege Andrea Schmailzl</p>
                <p>Münchner Straße 17 </p>
                <p>85540 Haar</p>
              </div>
            </div>
            <div className='single-info'>
              <div className='icon'>
                <FaPhone color='#28235d' />
              </div>
              <div>
                <p>
                  <a href='tel:+498960601819'>089 60601819</a>
                </p>
              </div>
            </div>
            <div className='single-info'>
              <div className='icon'>
                <MdMailOutline size={20} color='#28235d' />
              </div>
              <div>
                <p>
                  <Mailto color='red' email='info@schmailzl.de'>
                    info@schmailzl.de
                  </Mailto>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-mape'>
          <Maps />
        </div>
      </div>
    </div>
  )
}

export default Contact
