import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/allActions";
import { Link } from "react-router-dom";

const Cart = () => {
    let cart = useSelector((state) => state.cartReducer);

    return (
        <div className="font-roboto">
            <h1 className="text-3xl text-center md:text-5xl font-semibold mx-4 my-2 md:my-8 text-gray-700">
                My Cart
            </h1>
            {cart.length === 0 ? (
                <div className="flex h-70v flex-col items-center justify-center">
                    <span className="text-7xl md:text-9xl my-4 md:my-6">
                        😢
                    </span>{" "}
                    <span className="text-xl md:text-3xl">
                        Your cart is currently empty.
                    </span>
                </div>
            ) : (
                cart.map((item) => (
                    <div className="relative mx-4 my-6 md:mx-20 flex items-center border p-2 divide-x-2 divide-gray-300 divide-opacity-50 rounded-sm  hover:shadow-md border-opacity-50 transform duration-200 ease-in">
                        <Link
                            className="mr-3 h-20 w-20 object-contain flex items-center justify-center"
                            to={`/Shopping-cart/shop/${item.itemId}`}
                        >
                            <img className="" src={item.image} alt="" />
                        </Link>
                        <div className="pl-4 w-full overflow-hidden">
                            <div className="flex justify-between items-center w-full">
                                <Link
                                    className="truncate text-xl font-semibold w-5/6"
                                    to={`/Shopping-cart/shop/${item.itemId}`}
                                >
                                    <span>{item.title}</span>
                                </Link>
                                <span className="text-4xl font-light transform -translate-y-2 rotate-45 cursor-pointer">
                                    +
                                </span>
                            </div>
                            <h1>Size: {item.size}</h1>
                            <h1>Quantity: {item.quantity}</h1>
                            <h1>Price: {item.quantity * item.price}</h1>
                        </div>
                        <div className="absolute top-0 right-0">
                            {/* <span className="text-4xl font-light transform rotate-45 cursor-pointer">+</span> */}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
