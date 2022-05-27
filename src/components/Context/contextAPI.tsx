import React, { createContext ,useReducer ,FC} from "react";

import { transReducer } from "../Reducer/transReducer";


const intialData:any =[
  
]
export const createTransaction=createContext(intialData)

const  ContextAPI =({children}:any)=>{
  const [state, dispatch] = useReducer(transReducer,intialData)
  function AddTransaction(item:any) {
    console.log(item)
    return dispatch({
      type:"Add_Transaction",
      payload:{
        Description:item.Description,
        Amount:item.Amount
      }
    })
}
  return <createTransaction.Provider value={{
      transaction:state,
      AddTransaction
  }} >
{children}
  </createTransaction.Provider>
}

export default ContextAPI