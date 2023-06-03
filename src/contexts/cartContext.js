import React from 'react'
import { createContext ,useReducer} from 'react'
 import { CartReducer } from './cartReducer';

export const CartContext= createContext();

const initialState={cartItems:[]}

const CartContextProvider = ({children}) => {  
  
  const[state,dispatch]=useReducer(CartReducer,initialState);
  
  const addProduct=(payload)=>{
    dispatch({type:"ADD",payload})
    return state.cartItems;

  }
  const removeProduct=(payload)=>{
    dispatch({type:"REMOVE",payload})
    return state.cartItems;

  }

  const increaseQuantity=(payload)=>{
    dispatch({type:"INCQTY",payload})
    return state.cartItems;

  }
  const decreaseQuantity=(payload)=>{
    dispatch({type:"DECQTY",payload})
    return state.cartItems;

  }
  const clearBasket = () => {
    dispatch({ type: 'CLEAR', payload:undefined});
    return state.cartItems;
  }


const getItems=()=>{

  return state.cartItems;
}

  const constextValues={
 addProduct,
 removeProduct,
 decreaseQuantity,
 increaseQuantity,
 getItems,
 clearBasket,
 ...state

  }
  return (
   <CartContext.Provider value={constextValues}>
    {children}
   </CartContext.Provider>
  )
}

export default CartContextProvider;