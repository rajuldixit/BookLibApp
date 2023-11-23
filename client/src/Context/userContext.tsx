import React, { FC, createContext, useState } from 'react'

type props = {
  children: React.ReactNode
}
export const UserContext = createContext({})

const userContextProvider:FC<props> = ({children}) => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default userContextProvider