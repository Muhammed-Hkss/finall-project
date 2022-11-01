import React from 'react' 
import { Link } from 'react-router-dom'
import cls from './Card.module.scss' 
import {MdAddShoppingCart , MdFavoriteBorder} from 'react-icons/md'
import { deleteToCards, postToCart, postToLike } from './../../api/index';
import { useAuth } from './../../providers/useAuth';
import { API } from '../../api/api';
import { BsTrash } from 'react-icons/bs'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import useAlert from '../../hooks/useAlert';

const Card = () => { 
  const [ database, setDatabase ] = React.useState(null)
  const [ zavisimost, setZavisimost ] = React.useState(null)
  const [ filtered, setFiltered ] = React.useState(database)
  const [alignment, setAlignment] = React.useState('web');
  const { actions } = useAlert()




  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  const {users} = useAuth()


  function todoFilter(status) {
    if(status === 'all') {
      setFiltered(database)
    } else {
      let newTodo = [...database].filter(item => item.tag === status)
      setFiltered(newTodo)
    }
  }


  React.useEffect(() => {
    API.get('cards')
    .then(res => {
      const result = res ? Object.entries(res.data).map(([id, item]) => {
        return {
          ...item,
          id
        }
      }) : []
      setDatabase(result)})
  }, [zavisimost])

  const handleAddToCart = (id) => {
    actions.sweetAlert('ваш товар добавлен в карзинку')
    const toCart = database && database.find(item => item.id === id)

    postToCart(users.id, toCart, id)
    setZavisimost('hello')
  }

  const handleAddToLike = (id) => {
    actions.sweetAlert('ваш товар добавлен в избрынные')
    const toLike = database && database.find(item => item.id === id)

    postToLike(users.id, toLike, id)
    setZavisimost('hello')
  }

  return ( 
    <React.Fragment>
      <div className={cls.shop_button_cotainer}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton 
            style={{background:'#546e7a'}}
            onClick={() => todoFilter('all')} 
            value="all">
              ВСЕ ИГР
          </ToggleButton>

          <ToggleButton 
            style={{background:'#546e7a'}}
            onClick={() => todoFilter('ГОНКИ')} 
            value="ГОНКИ">
              ГОНКИ
          </ToggleButton>

          <ToggleButton 
            style={{background:'#546e7a'}}
            onClick={() => todoFilter('ОНЛАЙН')} 
            value="ОНЛАЙН">
              ОНЛАЙН
          </ToggleButton>

          <ToggleButton 
            style={{background:'#546e7a'}}
            onClick={() => todoFilter('АНИМЕ')} 
            value="АНИМЕ">
              АНИМЕ
          </ToggleButton>

          <ToggleButton 
            style={{background:'#546e7a'}}
            onClick={() => todoFilter('открытый мир')} 
            value="открытый мир">
              ОТКРЫТЫЙ МИР
          </ToggleButton>
        </ToggleButtonGroup>


      </div>
      <div className={cls.shop_row}>
        {
          filtered && filtered.map((item , i) => (
            <div className={cls.cards} key={i}> 
              <div className={cls.container}>
                {
                  users.email === 'admina@gmail.com' ? 
                  <button className={cls.clase_btn}
                    onClick={() =>  deleteToCards( item.id )}>
                      <BsTrash />
                  </button> : ''
                }
                <div className={cls.card}>
                  <div className={cls.image}>
                    <img src={item.url} className={cls.sliderImg} alt="..."/>
                  </div>
                  <div className={cls.about}>
                    <p className={cls.about_text}>{item.about}</p>
                  </div>
                  <div className={cls.content}>
                    <h5 className={cls.item_name}>
                      {item.name}
                    </h5> 

                    <Link to={`/product/${item.id}`} className={cls.link_btn}>More</Link> 

                    <div className={cls.item_price} >
                        <p>
                          <MdFavoriteBorder 
                          className={cls.favorite_icon}
                            onClick={() => handleAddToLike(item.id)}
                          />
                        </p>
                        
                        <p className={cls.shop_price}>
                          {item.price} $
                        </p>  

                        <p>
                          <MdAddShoppingCart  
                            className={cls.shop_icon}                   
                            onClick={() =>  handleAddToCart(item.id)}
                          />
                        </p>
                    </div>
                  </div>      
                </div>
              </div>
            </div> 
          ))
        }
      </div>
    </React.Fragment>
  ) 
} 
 
export default Card


