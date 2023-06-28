import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <UserContext.Provider value={{id, setId, name, setName, email, setEmail, password, setPassword }} >
      {children}
    </UserContext.Provider>
  )  
}
