import React from 'react'
import cls from './Footer.module.scss'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className={cls.footer_container}>
      <hr className={cls.footer_line}/>
      <div className={cls.list}>
        <div className={cls.footer_icons}>
            <a href="https://t.me/+qqnyRLx0E-9mMzFi"> <FaTelegramPlane /> </a>
            <a href=""> <AiFillYoutube /> </a>
            <a href=""> <BsDiscord /> </a>
            
            
            
          </div>
      </div>
      <div className={cls.footer_content}>
        <div className={cls.footer_img}>
          <img src="https://gabestore.ru/images/footericon.png" alt="" />
        </div>
        <div className={cls.footer_title}>
          <p>
            Все продаваемые ключи закупаются у официальных дистрибьюторов
          </p>
          <p>
              и издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer