import React from 'react'
import { Link } from 'react-router-dom'
import FormButton from '../../../../../components/FormButton'
import FormInput from '../../../../../components/FormInput'
import { handelLoginWithGoogle, handelRegisrterWithEmailAndPassword } from '../../../../../firebase'
import cls from './EmailAndPasswordRegister.module.scss'

const EmailAndPasswordRegister = () => {
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')
  const [name , setName] = React.useState('')
  const [photo , setPhoto] = React.useState('')
  const [number , setNumber] = React.useState('')



  

  return (


  <div className=''>


    <div className={cls.container}>
      <div className={cls.row}>
        <h1 className={cls.text_center}>Register</h1>
        <div className={cls.form_group}>
            <FormInput 
              type={'text'}
              placeholder={'Name'}
              defaultValue={name}
              setInputsValue={setName}
              name={'name'}
            />
            <FormInput 
              type={'email'}
              placeholder={'Email'}
              defaultValue={email}
              setInputsValue={setEmail}
              name={'email'}
            />
            <FormInput 
              type={'password'}
              placeholder={'Password'}
              defaultValue={password}
              setInputsValue={setPassword}
              name={'Password'}
            />
            <div>
              <FormButton 
                title={'Register'} 
                handelSubmit={() => {
                  handelRegisrterWithEmailAndPassword(email , password , name , photo , number)
                }}
              />
            </div>
        </div>

        <div className={cls.item_logo}> 
            <Link className={cls.transitionBtn} to="/auth/login">Al ready have an Account? Login</Link>
            <div className='text-center'>
              <img
                className={cls.google_log_in}
                onClick={handelLoginWithGoogle}
                width={'50px'} 
                style={{cursor:'pointer'}} 
                src="https://i.ya-webdesign.com/images/logo-google-chrome-png.png" 
                alt="" />
            </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default EmailAndPasswordRegister