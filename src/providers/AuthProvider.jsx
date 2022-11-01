import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";



export const AuthContext = React.createContext({})

export const AuthProvider = ({children}) => {

  const [users , setUsers] = React.useState(null)
  const [loading , setLoading] = React.useState(true)
  const [alertErrors , setAlertErrors] = React.useState(false)
  const [more , setMore] = React.useState(null)


  React.useEffect(() => {
    const Listen = onAuthStateChanged(auth , user => {
      if(user){
        setLoading(false)
        setUsers(user)
      }else{
        setLoading (false)
      }
    })
      return () => Listen()
  } , [])
  
  const value = React.useMemo(() => ({
    users,
    loading,
    setMore,
		more,
    setAlertErrors,
		alertErrors,
  }), [users , loading , setMore , more , setAlertErrors , alertErrors])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}
