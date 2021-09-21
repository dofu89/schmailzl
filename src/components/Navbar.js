import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoHome from '../imgs/logo-home.png'
import { BsJustify } from 'react-icons/bs'

const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar')
  const [menu, setMenu] = useState(true)

  const handleWheel = () => {
    window.scrollY >= 1 ? setNavbar('navbar-scrolling') : setNavbar('navbar')
  }

  const handleHamMenu = () => setMenu(!menu)

  window.addEventListener('scroll', handleWheel)
  const top = () => window.scrollTo(0, 0)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id='top' className={navbar}>
      <div onClick={handleHamMenu} className='hamburger'>
        <BsJustify style={{ color: 'white', width: 40, height: 40 }} />
      </div>
      <div className='navbar-container'>
        <div>
          <Link onClick={top} to='/'>
            <img src={logoHome} alt='schmailzl.de' />
          </Link>
        </div>
        <div className={menu ? 'menu' : 'hamb-menu'}>
          <ul>
            <li id='home-button'>
              <Link onClick={top} to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={top} to='/leistungen'>
                Unsere Leistungen
              </Link>
            </li>
            <li>
              <Link onClick={top} to='/ambulantepflege'>
                Ambulante Pflege?
              </Link>
            </li>
            <li>
              <Link onClick={top} to='/jobs'>
                Kontakt/Jobs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
