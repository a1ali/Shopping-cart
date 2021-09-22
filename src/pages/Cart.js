import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/allActions";

const Cart = () => {
    let cart = useSelector((state) => state.cartReducer);

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((item) => (
                <div>
                    <img className="h-20" src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <h1>{item.size}</h1>
                    <h1>{item.quantity}</h1>
                </div>
            ))}
        </div>
    );
};

export default Cart;
