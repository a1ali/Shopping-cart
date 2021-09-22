export const setActiveTab = (tab) => {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_TAB",
            payload: tab
        })
    }
}

export const addToCart = (cartItem) => {
    return (dispath) => {
        dispath({
            type:"ADD_TO_CART",
            payload:cartItem
        })
    }
}