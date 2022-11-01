import React from 'react'
import cls from './FormInput.module.scss'

const FormInput = ({
  
  type,
  placeholder,
  defaultValue,
  setInputsValue,
  name

}
) => {
  return (
    <div className={cls.input_center}>
      <input 
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => setInputsValue(e.target.value)}
        name={name}
        className={cls.form_inputs}
      />
    </div>
  )
}

export default FormInput