import { createContext, useState } from 'react'

export const CategoriesContext = createContext()

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  return (
    <CategoriesContext.Provider value={{categories, setCategories}} >
      {children}
    </CategoriesContext.Provider>
  )  
}