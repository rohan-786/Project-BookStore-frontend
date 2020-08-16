import { combineReducers} from 'redux';

// import HeaderReducer from '../Reducer/HeaderReducer';
 import CommanReducer from '../Reducer/CommanReducer';

import UserInfoReducer from "../Reducer/UserInfo";

export default combineReducers({
    // header : HeaderReducer,
    comman : CommanReducer,
    userActivityInfo : UserInfoReducer
})