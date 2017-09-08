export function setUserName(){
    return {
        type: "CHANGE_NAME",
        payload: {name: "Ram"}
    }
}

export function setUserAge(){
    return {
        type: "CHANGE_AGE",
        payload: {age: 20}
    }
}