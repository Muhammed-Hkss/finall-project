import React from 'react'
import { deleteFromLike, getToLike } from '../../api'
import { useAuth } from '../../providers/useAuth'
import cls from './Favorite.module.scss'
import { Link } from 'react-router-dom'
import useAlert from '../../hooks/useAlert'


const Favorite = () => {
  const {users} = useAuth()

  const [favoriteGamesData, setFavoriteGamesData] = React.useState(null)
  const { actions } = useAlert()

  const setData = () => {
    getToLike(users.id).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setFavoriteGamesData(newData)
    })
  }

  React.useEffect(() => {
    setData()
  }, [])

  if(!favoriteGamesData) return <h1 className={cls.favorite_error}>В ВАШЕМ ИЗБРАННОМ ПОКА ПУСТО :(</h1>

  return (
    <div>
      <div className={cls.row}>
        {
          favoriteGamesData.map(item => {
            return (
              <div key={item.id}>
                
                <div className={cls.shop_container}>

                  <div className={cls.claseBtn}>
                    <button 
                      className={cls.favorite_out}
                      onClick={() =>  deleteFromLike( users.id,  item.id , actions.sweetAlert('ваш товар удален в избрынные') )}
                    >
                        &times;
                    </button>
                  </div>

                  <div className={cls.shop_card}>
                    <img className={cls.shop_img} src={item.url} alt=""/>
                  </div>

                  {/* <div className={cls.shop_text}>
                    <h4 className={cls.shop_name}>{item.name}</h4>
                    <h4 className={cls.shop_price}>{item.price}</h4>
                  </div> */}

                  <div>
                    <Link to={`/product/${item.id}`} className={cls.link_btn}>More</Link>
                  </div>

                </div>
                

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Favorite





