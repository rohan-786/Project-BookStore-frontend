import { combineReducers} from 'redux';

import HeaderReducer from '../Reducer/HeaderReducer';
import CommanReducer from '../Reducer/CommanReducer';

export default combineReducers({
    header : HeaderReducer,
    comman : CommanReducer
})