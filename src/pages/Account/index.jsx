import React from 'react'
import { auth, handelSignOut } from '../../firebase'
import { useAuth } from '../../providers/useAuth'
import cls from './Account.module.scss'
import Header from '../../colect/Header'
import { BsFillPencilFill, BsEyeSlash } from 'react-icons/bs'
import { getPhoto, getUser, updatePrfile } from '../../api'
import { updateEmail, updateProfile } from 'firebase/auth'



const Account = () => {
  const {users} = useAuth()
	const [data, setData] = React.useState(null)
	// const [Photo, setPhoto] = React.useState(null)

  





  // const setPhotoData = () => {
  //   getPhoto(users.id).then(r => {
  //     const newPhotoData = Object.entries(r.data).map(([id , item]) => {
  //       return {
  //         id ,
  //         ...item
  //       }
  //     })
  //     setPhoto(newPhotoData)
  //   })
  // }

  // React.useEffect(() => {
  //   setPhotoData()
  // }, [])

  // console.log(Photo);












  React.useEffect(() => {
		getUser(users.id).then(res => {
			if (!res.data?.photoURL) {
				const base = {
					...res.data,
				}
				setData(base)
			} else {
				setData(res?.data)
			}
		})
	}, [users?.id])







function postUpdate() {
  updatePrfile(users?.uid, data)

  updateEmail(auth.currentUser, data.email ).then(res => {
    console.log(res);
  })

  updateProfile(users, {
    displayName: data.providerData,
    photoURL: data.photo,
    phoneNumber: data.nuber
  })
}



  if(!users) return <h1>loading..</h1>

  return (
    <div>
      <div className={cls.logo_card}>
          <Header />
      </div>
      

      <div className={cls.container}>
        <div className={cls.row}>
          
          <div className={cls.cards_header}>
            <div className={cls.headers_image} >
              <img 
                src={users?.photoURL}
                alt=""
              />

            </div>
          </div>
          {/* <div className={cls.cards_header}><div className={cls.headers_image} > <img src={users?.photoURL} alt=""/></div></div> */}
          {/* {
            dataPhoto === dataPhoto.photoURL ? '111111111' : '2222222'
          } */}
          

          <div>
            

            <div className={cls.container_input}>
              <label className={cls.input}>
                <input
                  className={cls.input}
                  onChange={e => setData({...data, email: e.target.value})}
                  defaultValue={users.email}
                  type="email"
                  placeholder='email'
                />
                <BsFillPencilFill className={cls.icons}/>
              </label>
              <label className={cls.input}>
                <input
                  className={cls.input}
                  onChange={e => setData({...data, photo: e.target.value})}
                  type="text"
                  placeholder='URL на картинку'
                />
                <BsFillPencilFill className={cls.icons}/>
              </label>
              <label className={cls.input}>
                <input
                  className={cls.input}
                  onChange={e => setData({...data, providerData: e.target.value})}
                  defaultValue={users.displayName}
                  type="text"
                  placeholder='Names'
                />
                <BsFillPencilFill className={cls.icons}/>
              </label>
              <label className={cls.input}>
                <input
                  className={cls.input}
                  onChange={e => setData({...data, nuber: e.target.value})}
                  type="text"
                  defaultValue={users.phoneNumber}
                  placeholder='Number'
                />
                <BsFillPencilFill className={cls.icons}/>
              </label>

              <div className={cls.container_btn}>
                <div className={cls.submit_item}>
                  <button
                    className={cls.submit_list}
                    onClick={() => postUpdate()}
                  >
                    Изменить
                  </button>
                </div>
                <div className={cls.submit_item}>
                  <button className={cls.submit_list} onClick={handelSignOut}>signOut</button>
                </div>
              </div>
              
            </div>



            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Account







