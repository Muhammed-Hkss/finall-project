import React from 'react'
import { getGamesData } from '../../api'
import Loader from '../../components/Loader'
import MainCards from '../../components/MainCard'
import Product from '../../pages/Product'
import cls from './Main.module.scss'






const Main = () => {
  const [gamesData, setGamesData] = React.useState(null)


  React.useEffect(() => {
    getGamesData().then(r => {
      const newData = Object.entries(r).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setGamesData(newData)
    })
  }, [])



  if(!gamesData) return <Loader /> 
  return (
    <div>
      <div className={cls.scrolbar}>
          <div className={cls.advantages_item}>
            <MainCards />
          </div>
          
          
          <div className={cls.product_center}>
            
            <Product/>
          </div>

      </div>
    </div>
  )
}

export default Main