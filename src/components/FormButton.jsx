import React from 'react'
import cls from './FormInput.module.scss'

const FormButton = ({title, handelSubmit}) => {
  return (
    <button 
      className={cls.submit_login}
      onClick={handelSubmit}
    >
      {title}
    </button>
  )
}

export default FormButton