import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/useAuth'
import { navList } from '../../utils/List'
import './Burger.css'


const BurgerMenu = () => {
  const { users } = useAuth()

  return (
    <div>
      <div id="menuArea">
        <div className='menu_row'>
          <input className='input_item' type="checkbox" id="menuToggle"></input>

            <label htmlFor="menuToggle" className="menuOpen">
              <div className="open"></div>
            </label>

          <div className="menu menuEffects">
            <label htmlFor="menuToggle"></label>
            <div className="menuContent">
              <ul>
              {
                navList.map(item => <li key={item.id} className='nav_list'>
                  <Link to={item.path}>
                    {item.button}
                    {item.title}
                  </Link>
                  {
                    users.email === 'admina@gmail.com' ? <Link to={item.path}> {item.admin} </Link> : ''
                  }
                </li>
                
                )
              }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu