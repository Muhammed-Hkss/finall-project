import React from 'react'
import EmailAndPasswordLogin from './companents/EmailAndPassworLogin'
import cls from './Login.module.scss'


const Login = () => {
  
  return (
    <React.Fragment>
    <div className={cls.container}>
      <div className={cls.row} >
        <img className={cls.img_row} src="https://f.partnerkin.com/uploads/storage/files/file_1638888420.gif" alt="error" />
        <div className={cls.auth_login}>
          <EmailAndPasswordLogin />
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Login







