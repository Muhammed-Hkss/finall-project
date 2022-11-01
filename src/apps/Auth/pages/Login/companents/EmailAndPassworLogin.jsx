import React from 'react'
import { Link } from 'react-router-dom'
import FormButton from '../../../../../components/FormButton'
import FormInput from '../../../../../components/FormInput'
import { handelLoginWithEmailAndPassword, handelLoginWithGoogle } from '../../../../../firebase'
import cls from './EmailAndPasswordLogin.module.scss'

const EmailAndPasswordLogin = () => {
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')

  return (


    <div className={cls.container}>
      <div className={cls.row}>
        <h1 className={cls.text_center}>Login</h1>
          <div className={cls.form_group}>
            <FormInput
              className={cls.form_inputs} 
              type={'email'}
              placeholder={'Email'}
              defaultValue={email}
              setInputsValue={setEmail}
              name={'email'}
            />
            <FormInput
              className={cls.form_inputs} 
              type={'password'}
              placeholder={'Password'}
              defaultValue={password}
              setInputsValue={setPassword}
              name={'Password'}
            />
            <div className={cls.submit_login}>
              <FormButton 
                title={'Login'} 
                handelSubmit ={() => {
                  handelLoginWithEmailAndPassword( email , password)
                }}
              />
            </div>
          </div>
          <div className={cls.item_logo}> 
            <Link className={cls.transitionBtn} to="/auth/register">Don't have an Account? Register</Link>
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
  )
}

export default EmailAndPasswordLogin