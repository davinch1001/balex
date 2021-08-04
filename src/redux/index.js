import {createStore, compose, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnch = composeFunc(applyMiddleware(thunk))
const initState = {};
const store = createStore(rootReducer(), initState, composeEnch);

export default store;