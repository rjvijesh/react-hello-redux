const iState = {
    name: "ramesh",
    wishes: ['eat', 'code']
}



const reducer = (state = iState, action) => {
    //console.log(action);
    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.payload
        }
    }
    if (action.type === "TICK_NAME") {
        return {
            ...state,
            name: action.payload
        }
    }
    if (action.type === "CHANGE_WISHES") {
        return {
            ...state,
            wishes: action.payload
        }
    }

    return iState;
}

export default reducer;