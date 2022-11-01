import React from "react";
import LeyoutRoutes from "./pages/LayoutRoutes";
import AuthRoutes from "./pages/AuthRoutes";
import Loader from "./components/Loader";
import { useAuth } from "./providers/useAuth";
import './App.css'

 
export const App = () =>{
  const { users , loading } = useAuth()

  
  if(loading) return <Loader />

  return users ? <LeyoutRoutes /> : <AuthRoutes />

}

export default App;







