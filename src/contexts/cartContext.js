import React from 'react'
import { createContext } from 'react'
 

export const CartContext= createContext();

const initialState={cartItems:[]}

const cartContext = ({children}) => {  
  
  const addProducts=(payload)=>{
 debugger;

  }

  const constextValues={
 addProducts,
 ...initialState

  }
  return (
   <CartContext.Provider value={initialState}>
    {children}
   </CartContext.Provider>
  )
}

export default cartContext