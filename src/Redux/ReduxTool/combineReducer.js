import { combineReducers} from 'redux';

import HeaderReducer from '../Reducer/HeaderReducer';

export default combineReducers({
    header : HeaderReducer
})