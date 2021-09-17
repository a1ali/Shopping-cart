const tabReducer = (state = "home", action) => {
    // switch (action.type) {
    //     case "home":
    //         return "home";
    //     case "shop":
    //         return "shop";
    //     case "contact":
    //         return "contact";
    //     default:
    //         return "home";
    // }
    switch (action.type) {
        case "CHANGE_TAB":
            return action.payload
        default:
            return state
    }
};

export default tabReducer;