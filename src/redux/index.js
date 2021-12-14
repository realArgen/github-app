import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './reducers/index';


const initialState = {};

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const funcEnhancer = composeFunc(applyMiddleware(thunk));

const store = createStore(mainReducer(), initialState, funcEnhancer);

export default store;