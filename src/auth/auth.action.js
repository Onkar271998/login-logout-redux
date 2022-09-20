
import {AUTH_SUCCESS, AUTH_LOGOUT} from "./auth.type";
import axios from "axios"
// import { useDispatch } from "react-redux";


   
 export const Logins=(data)=> async (dispatch)=>{
     
    try{
        let response= await axios.post("https://reqres.in/api/login",data)
         
        
        dispatch({type: AUTH_SUCCESS ,payload: response.data.token}  )
    } 
    catch(err){
         console.log(err)
    }


   
     
  }
 

    export const Logout=()=>({type:AUTH_LOGOUT})
    
    