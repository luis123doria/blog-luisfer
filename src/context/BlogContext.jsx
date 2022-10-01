import React, { createContext } from 'react'

// Creacion del Object Context
export const BlogContext = createContext()

// Creacion del Component BlogContextProvider
export const BlogContextProvider = ({children}) => {

  return (
    <BlogContext.Provider> 
        {children}
    </BlogContext.Provider>
  )
}
