import axios from  "axios";

const initialState = {
        fetching: false,
        fetched: false,
        users: [],
        error: null
}
export function fetchTweets(state=initialState, action){
    return  function (dispatch){
        axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((response) => {
            dispatch({type: "RECEIVE_USERS", payload: response.data });
        })
        .catch((err) => {
            dispatch({type: "FETCH_ERROR", payload: err});
        })
    }
}