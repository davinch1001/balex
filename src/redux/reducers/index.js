import {combineReducers} from "redux";
import auth from "./auth";
import calc from "./calc";
import order from "./order";

const rootReducer = () => combineReducers({
    auth,
    calc,
    order
});

export default rootReducer;