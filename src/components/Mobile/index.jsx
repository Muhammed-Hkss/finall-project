import React from 'react'
import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu'
import Search from '../Search'
import './isMobile.css'


const Mobile = () => {
  return (
    <React.Fragment>
      <div className='mobile_container'>
        <div className='burger_menu'>
          <BurgerMenu />
        </div>

        <div className='search'>
          <Search/>
        </div>

        <div className="logo_card">
          <Link to="/">
            <img className="logo_img" src="https://poisk-firm.ru/storage/employer/logo/50/84/76/f7bb8aca18f50da0b48cb17b24.jpg" alt="" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Mobile