export default function reducer(state = {}, action){
    switch(action.type){
        case "CHANGE_NAME" : {
            var state = Object.assign({}, state, {name: action.payload.name});
            break;
        }
        case "CHANGE_AGE" : {
            var state = Object.assign({}, state, {age: action.payload.age})
            break;
        }
        default : {
            break;
        }
    }
    return state;
}