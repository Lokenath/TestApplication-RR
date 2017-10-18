import axios from  "axios";

const initialState = {
        fetching: false,
        fetched: false,
        users: [],
        error: null
}

function recieveUser(data){
    return {
        type: "RECEIVE_USERS",
        payload: data
    }
}
function recieveUserError(err){
    return {
        type: "FETCH_ERROR",
        payload: err
    }
}
export function fetchTweets(state=initialState, action){
    return  function (dispatch){
        axios.get("http://rest.learncode.academy/api/wstern/users")
        .then((response) => {
            dispatch(recieveUser(response.data));
        })
        .catch((err) => {
            dispatch(recieveUserError(err));
        })
    }
}