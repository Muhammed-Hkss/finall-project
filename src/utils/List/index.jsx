import {AiOutlineHeart} from 'react-icons/ai'
import {GiShoppingCart} from 'react-icons/gi'
import {BiBell} from 'react-icons/bi'
import {VscAccount} from 'react-icons/vsc'
import {RiAdminLine} from 'react-icons/ri'



export const navList = [
    {
      id:1,
      title:<BiBell />,
      path:'/bell',
    },
    {
      id:2,
      title:<VscAccount/>,
      path:'/account',
    },
    {
      id:3,
      title:<AiOutlineHeart/>,
      path:'/favorite',
    },
    {
      id:4,
      title:<GiShoppingCart />,
      path:'/basket',
    },
    {
      id:5,
      admin:<RiAdminLine />,
      path:'/admin',
    },
    
]




export const cardsList = [
    {
      id:1,
      url:'https://gabestore.ru/images/Gabestore_icons_discounts.png',
      title:'Скидки',
      subTitle:'круглый год',
    },
    {
      id:2,
      url:'https://gabestore.ru/images/Gabestore_icons_support_24.png',
      title:'Круглосуточная',
      subTitle:'поддержка',
    },
    {
      id:3,
      url:'https://gabestore.ru/images/Gabestore_icons_achievement_system.png',
      title:'Система',
      subTitle:'достижений',
    },
    {
      id:4,
      url:'https://gabestore.ru/images/Gabestore_icons_active_community.png',
      title:'Активное',
      subTitle:'коммьюнити',
    },
    {
      id:5,
      url:'https://gabestore.ru/images/Gabestore_icons_charity_events.png',
      title:'Любовь',
      subTitle:'к играм',
    },
]