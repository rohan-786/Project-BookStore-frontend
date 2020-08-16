import {reducerLogger} from '../utility/utility';
const initialState = {}
let previousState; 
let modifiedState;
const REDUCER_NAME = "USER_INFO";

const Reducer = (state = initialState , action) =>{
    previousState = state;
    let {type , data} = action;
    switch(type){
        case "SET_USER_ACTIVITY_DATA":
            state = {...state , userActivityData:[...action.data]}
        case "SET_USER_ACTIVITY_VISIABLE_FLAG":
            state = {...state , showActivityPanel : action.data}    
        default :
            state = {...state}
    }
    modifiedState = state;
    reducerLogger(previousState ,action ,modifiedState,REDUCER_NAME)
    return state;
}

export default Reducer;