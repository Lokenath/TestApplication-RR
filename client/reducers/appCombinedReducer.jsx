import {combineReducers} from "redux";

import user from "./userReducer.jsx";
import tweets from "./tweetsReducer.jsx";

export default combineReducers({
    user,
    tweets
});