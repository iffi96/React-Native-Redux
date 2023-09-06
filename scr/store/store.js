import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {counterReducer} from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
