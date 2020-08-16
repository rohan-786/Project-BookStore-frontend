import { combineReducers} from 'redux';
import CommanReducer from '../Reducer/CommanReducer';
import UserInfoReducer from "../Reducer/UserInfo";

export default combineReducers({
    comman : CommanReducer,
    userActivityInfo : UserInfoReducer
})