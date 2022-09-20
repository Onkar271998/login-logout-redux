import { AUTH_SUCCESS,AUTH_LOGOUT } from "./auth.type"

  


  let initialState={
    token:"",
    isAuth:false
  }
    

   export const loginReducer=(state=initialState, {type,payload})=>{

            switch(type){
                case AUTH_SUCCESS:{
                    return{
                        // ...state,
                        token:payload,
                        isAuth:true
                       
                    }
                }
                case AUTH_LOGOUT:{
                    console.log("hi")
                    return{
                        // ...state,
                        token:"",
                        isAuth:false,
                    }
                }
                default :{
                    return state
                }
            }

    }
