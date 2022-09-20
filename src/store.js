























import {combineReducers, legacy_createStore,applyMiddleware} from "redux";
import {loginReducer} from "./auth/auth.reducer"
import thunk from "redux-thunk"
let initialState={

    counter:{
        count:0,
    }

}  
const counterReducer=(state=initialState,action)=>{

  
    
}

let rootReducer=combineReducers({
     login:loginReducer
})
export const store = legacy_createStore(  rootReducer, applyMiddleware(thunk));