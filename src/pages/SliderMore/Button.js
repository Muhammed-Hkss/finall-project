import React from "react";
import {AiOutlineArrowLeft , AiOutlineArrowRight} from 'react-icons/ai'

const Button = ({direction , handelSlide}) => {
  return (
    <>
    {
      direction === 'prev' 
      ? <button className={direction === 'prev' && 'prev submitBtn'} onClick={handelSlide}><AiOutlineArrowLeft /></button> 
      : <button className={direction === 'next' && 'next submitBtn'} onClick={handelSlide}><AiOutlineArrowRight /></button>
    }
    </>
  )
}

export default Button

