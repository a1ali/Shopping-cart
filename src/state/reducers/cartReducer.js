const cartReducer = (cart = [], action) => {
    if (action.type === "ADD_TO_CART") {
        let cartCopy = [...cart];
        let itemExists = false;
        for (let i = 0; i < cartCopy.length; i++) {
            if (
                cartCopy[i].title === action.payload.title &&
                cartCopy[i].size === action.payload.size
            ) {
                cartCopy[i].quantity =
                    cartCopy[i].quantity + action.payload.quantity;
                itemExists = true;
                break;
            }
        }
        if (!itemExists) {
            cartCopy.push(action.payload);
        }
        return cartCopy;
    } else if (action.type === "REMOVE_FROM_CART") {
        return cart.filter((item) => item.id !== action.payload);
    }
    return cart;
};

export default cartReducer;
