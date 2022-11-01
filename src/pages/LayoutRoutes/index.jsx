import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import * as LayoutPages from '../../apps/Layout/pages'
import { useAuth } from '../../providers/useAuth'
import Account from '../Account'
import AdminPanel from '../AdminPanel/AdminPanel'
import Bell from '../Bell'
import Favorite from '../Favorite'
import Order from '../Order'
import ProductMore from '../ProductMore'
import Shop from '../Shop'



const LeyoutRoutes = () => {
  const { users } = useAuth()

  const navigate = useNavigate()

  React.useEffect(() => {
    users && navigate('/')
  }, [users])

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LayoutPages.Colect/>}/>
        <Route path='/bell' element={<Bell />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/favorite' element={<Favorite />}/>
        <Route path='/basket' element={<Shop />}/>
        <Route path='/product/:id' element={<ProductMore />}/>
        <Route path='/order' element={<Order />}/>
        <Route />
        {users.email === 'admina@gmail.com' ? <Route path='/admin' element={<AdminPanel />}/> : ''}
      </Routes>
    </React.Fragment>
  )
}

export default LeyoutRoutes

