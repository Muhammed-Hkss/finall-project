import React from 'react'
import { createCard } from '../../../api'
import { useAuth } from '../../../providers/useAuth'

export const useCards = () => {
  
  const [isLoading , setLoading] = React.useState(false)

  const { users } = useAuth()



  const post = React.useCallback(data => {
    setLoading(true)

    createCard(data , users?.id)
    .finally(() => setLoading(false))
  }, [users?.id])
  
    return{
      isLoading,
      actions: {
        post ,
      }
    }

}



