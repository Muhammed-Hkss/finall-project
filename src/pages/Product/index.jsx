import React from 'react'
import Card from '../../components/Card'
import cls from './Product.module.scss'

const Product = () => {

  // console.log(data);
  return (
    <div className={cls.container}>
      <div className={cls.row}>
        <Card />
      </div>
    </div>
  )
}

export default Product