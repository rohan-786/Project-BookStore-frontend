import {reducerLogger} from '../utility/utility';
const initialState = {
    headerState :{}       
}
let previousState; 
let modifiedState;
const REDUCER_NAME = "HEADER_REDUX";

const Reducer = (state = initialState , action) =>{
    action = {type:"SET_HEADER" , payload:"123"};
    previousState = state;
    //state = action.payload;
    modifiedState = {"try" : action.payload};
    reducerLogger(previousState ,action ,modifiedState,REDUCER_NAME)
    return state;
}

export default Reducer;