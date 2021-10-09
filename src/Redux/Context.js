import {createContext, useReducer} from "react"
import {reducer} from "./reducer"

const ProductItem=createContext()

const Context=({children})=>{

    const products=[]

    const [state,dispatch] = useReducer(reducer,{
        products: products,
    })
    return <ProductItem.Provider value={{state,dispatch}}>{children}</ProductItem.Provider>
}

export default Context;