import axios from "axios";
import {FETCH_DATA} from "./actionType"

export const fetchData =()=>async(dispatch)=>{
    try{
        let response = await axios.get("https://fakestoreapi.com/products");
        dispatch({type: FETCH_DATA,payload: response.data})
    }catch{
        console.error("error");
    }
}