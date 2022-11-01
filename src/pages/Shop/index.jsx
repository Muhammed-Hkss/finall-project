import React from 'react'
import { useParams } from 'react-router-dom'
import { deleteFromCart, getToCart, orderProduct, paymentForm } from '../../api'
import useAlert from '../../hooks/useAlert'
import { useAuth } from '../../providers/useAuth'
import cls from './Shop.module.scss'



const Shop = () => {
  const [base, setBase] = React.useState(null)
  const {users} = useAuth()
  const [gamesData, setGamesData] = React.useState(null)
  const { actions } = useAlert()
  const {id} = useParams()

  let totalCartPrice = 0

  const setData = () => {
    getToCart(users.id).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {

        return {
          id,
          ...item
        }
      })
      setGamesData(newData)
      
    })
  }


  React.useEffect(() => {
    setData()
  }, [])
  
  function getCard() {
    getToCart(users.id).then(res => {
      const arr = res.data ? Object.values(res.data) : false
      setBase(arr)
    })
  }

  React.useEffect(() => {
    getCard()
  } , [])


  function handelOrder() {
    orderProduct(
      {
        products: base,
        date: new Date().toLocaleDateString(),
        orderState: false ,
        
      })
      .then(r => {
        localStorage.setItem('orderId', r.data.name)
      })
  } 

  // React.useEffect(() => {
  //   getToCart( users.id )
  //   .then(r => setForm(r.data))
  // } , [])


  // function handelOrderr() {
  //   alert('sggdggasgaf')
  //   orderProduct(id,
  //     {
  //       products: base,
  //       date: new Date().toLocaleDateString(),
  //       orderState: false ,
        
  //     })
  //     .then(r => {
  //       localStorage.setItem('orderId', r.data.name)
  //     })
  // } 




  if(!gamesData) return <h1 className={cls.shop_error}>В ВАШЕЙ КОРЗИНЕ ЕЩЕ НИЧЕГО НЕТ :(</h1> 

  return (
    <div>
      <div className={cls.shop_zakaz}>
        <h1>Мой заказ</h1>
      </div>
      <div>
        {
          gamesData.map(item => {

            totalCartPrice += item.price * item.count
            
            return (
              <div className={cls.row}  key={item.id}>
                
                <hr/>

                <div className={cls.shop_container}>
                  <div className={cls.shop_card}>
                  <img className={cls.shop_img} src={item.url} alt=""/>
                  </div>

                  <div className={cls.shop_name_item}>
                    <h4 className={cls.shop_name}>{item.name}</h4>
                    <h4 className={cls.shop_price}>{item.price} $</h4>
                    {/* <button 
                      className={cls.totlal_button}
                      onClick={() =>  handleAddToForm( item.id )}
                    > 
                      Оплатить 
                    </button> */}
                  </div>
                  <div className={cls.claseBtn}>
                    <button 
                      className={cls.clase_btn}
                      onClick={() =>  deleteFromCart( users.id,  item.id , actions.sweetAlert('ваш товар удален в карзинку') )}
                    >
                        &times;
                    </button>
                  </div>

                </div>

                <hr/>

              </div>

            )
            
          })
        }
      </div>

      <div className={cls.total_container}>
        <div className={cls.total_row}>
          <h4 className={cls.totlan_text}>Total:
            <span className={cls.total_price}>{totalCartPrice}$</span>
          </h4>
          <hr />
          <div className={cls.total_container_button}>
            <button 
              className={cls.totlal_button}
              onClick={() =>  handelOrder( actions.sweetAlert('щас щас жди 5 минут мы будим оформли заназ ') )}
              > 
              Оплатить 
            </button>
          </div>
        </div>
      </div>

        

    </div>
  )
}

export default Shop



