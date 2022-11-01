import React from 'react'
import { Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../../providers/useAuth'
import { navList } from '../../utils/List'
import SearchDesktop from '../SearchDesktop'
import cls from './isDesktop.module.scss'

const Desktop = () => {
  const { users } = useAuth()


  return (
    <div className={cls.row}>
      <div className={cls.search__container}>

          <SearchDesktop />

        <div className={cls.logo_card}>
          <Link to="/">
            <img className={cls.logo_img} src="https://poisk-firm.ru/storage/employer/logo/50/84/76/f7bb8aca18f50da0b48cb17b24.jpg" alt="" />
          </Link>
        </div>
      </div>
      <div className={cls.nav_item}>
        <ul>
          {
            navList.map(item => <li key={item.id} className={cls.nav_list}>
              <Link to={item.path}>
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
  )
}

export default Desktop

