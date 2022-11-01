import React from 'react'
import EmailAndPasswordRegister from './components/EmailAndPasswordRegister'
import cls from './Register.module.scss'


const Register = () => {
  
  return (
    <React.Fragment>
    <div className={cls.container}>
      <div className={cls.row} >
        <img className={cls.img_row} src="https://i.pinimg.com/originals/a1/14/57/a11457ddd26634ccbd51873fbff380d2.gif" alt="error" />
        <div className={cls.auth_login}>
          <EmailAndPasswordRegister />
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Register