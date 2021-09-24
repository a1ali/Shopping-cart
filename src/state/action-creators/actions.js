export const setActiveTab = (tab) => {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_TAB",
            payload: tab
        })
    }
}

export const addToCart = (cartItem) => {
    return (dispatch) => {
        dispatch({
            type:"ADD_TO_CART",
            payload:cartItem
        })
    }
}


export const removeFromCart = (cartId) => {
    return (dispatch) => {
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:cartId
        })
    }

}