const tabReducer = (state = "home", action) => {
    switch (action.type) {
        case "CHANGE_TAB":
            return action.payload
        default:
            return state
    }
};

export default tabReducer;