import {createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import combineReducer from './combineReducer';

const configureStore = preloadedState =>{
    const store = createStore(
        combineReducer , 
        compose(
            applyMiddleware(thunk , createLogger())
        )
    )
    return store;
}
export default configureStore;
