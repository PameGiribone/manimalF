import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducer } from '../Reducer/reducer';
import axios from "axios"

const AnimalState = createContext();

const initialState = {
    categories:[],
    userActive: false,
    userId: "",
    userEmail: "",
    product:[]
    
}

const GlobalContext = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  const categoriesUrl= "https://happy-smile-production.up.railway.app/categorias/listar";
  const productUrl = "https://happy-smile-production.up.railway.app/productos/listar"
  
  useEffect(()=>{
    axios(categoriesUrl)
    .then((res)=>dispatch({type:"GET_CATEGORIES",payload:res.data}))
    .catch((err)=>console.log(err));
    
  },[])

  useEffect(()=>{
    axios(productUrl)
    .then((res)=>dispatch({type:"GET_PRODUCT", payload:res.data}))
  },[])
    
  return (
    <AnimalState.Provider value={{state,dispatch}}>
        {children}
    </AnimalState.Provider>
  )
}

export default GlobalContext;

export const useAnimalState=()=>{
   return useContext(AnimalState) 
}