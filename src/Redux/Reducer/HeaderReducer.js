import {reducerLogger} from '../utility/utility';
const initialState = {}
let previousState; 
let modifiedState;
const REDUCER_NAME = "HEADER_REDUX";

const Reducer = (state = initialState , action) =>{
    previousState = state;
    let {type , data} = action;
    switch(type){
        case "SET_SIGN_IN_CLICKED":{
            state = {...state , signInClicked: data}
            break;
        }
        case "SET_USER_LOGIN_STATUS":{
            state = {...state , userSignInStatus : data}
        }
        case "SET_SEARCH_DATA" :{
            state = {...state ,  userSearchData : data }
        }
        case "SET_SELECTED_BOOK_ID":{
            state = {...state , selectedBook : data}
        }
        default :
            state = {...state}
    }
    modifiedState = state;
    reducerLogger(previousState ,action ,modifiedState,REDUCER_NAME)
    return state;
}

export default Reducer;