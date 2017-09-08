export default function reducer(state={
        fetching: false,
        fetched: false,
        users: [],
        error: null
}, action){
    switch(action.type){
        case "FETCH_USERS_START" : {
            return Object.assign({}, state, {fetching: true});
            break;
        }
        case "RECEIVE_USERS" : {
            return Object.assign({}, state, {fetching: false, fetched: true, users:action.payload});
            break; 
        }
        case "FETCH_ERROR" : {
            return Object.assign({}, state, {fetching: false, error:action.payload});
            break;
        }
        default: {
            break;
        }
    }
    return state;
}