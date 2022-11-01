import React from 'react'
import { getOrderedProducts } from '../../api'
import { useAuth } from '../../providers/useAuth'
import cls from './order.module.scss'


const Order = () => {

    const {users} = useAuth()
    const [Order, setOrder] = React.useState(null)
    const [DataProducts , setDataProducts] = React.useState(null)




      const setData = () => {
        getOrderedProducts(users.id).then(r => {
            const neworder = Object.entries(r.data).map(([id, item ]) => {
              // console.log(item);
              return {
              id,
              ...item,
            }
          })
          setOrder(neworder)
        })
      }

      // console.log(Order);
      

      React.useEffect(() => {
        setData()
      }, [])



    
  return (
    <div className={cls.Order}>
      {
        Order && Order.map(item => {
          return (
            <div className={cls.ContainerOrder} key={item.id}>
              <div className={cls.row}>
              <p className={cls.ItemDate}>{item.date}</p>
              <p className={cls.ItemDate}>{item.id}</p>
                {
                  Order && item.products.map(products => {
                    return (
                      <div key={products.id}>
                        <p className={cls.ProductsName}>{products.name}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div className={cls.orderBtnDiv}>
                <button  className={cls.orderBtn}>
                  оформит заказ
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Order
