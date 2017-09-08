import { applyMiddleware, combineReducers, createStore } from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers/appCombinedReducer.jsx";

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducer, middleware);