import React from 'react'
import { hamburger } from '../assets/icons'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
  return (
      <header className=' absolute padding-x py-8 z-10 w-full'>
          <nav className='  flex justify-between items-center max-container'>
              <a className='' href="/">
                  <img src={headerLogo} alt="Logo"
                      width={130}
                    height={30}
                  />
              </a>
              <ul className=' flex   flex-1 justify-center items-center gap-16 max-lg:hidden'>
                  {
                      navLinks.map((link, index) => (
                          <li key={index} className='mr-8'>
                              <a href={link.href} className=' font-montserrat leading-normal text-lg text-slate-gray'>{link.label}</a>
                          </li>
                      ))
                  }
              </ul>
              <div className=' lg:hidden'>
                  <img src={hamburger} alt="menu" width={25} height={25} />
              </div>
          </nav>
    </header>
  )
}

export default Nav