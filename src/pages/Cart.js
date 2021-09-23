import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/allActions";
import { Link } from "react-router-dom";

const Cart = () => {
    let cart = useSelector((state) => state.cartReducer);
    let [subTotal, setSubtotal] = useState(0);

    const updateTotal = () => {
        cart.forEach(item => {
            setSubtotal((subTotal + (item.price * item.quantity)).toFixed(2))
        });
    }

    useEffect(() => {
        updateTotal()
    }, [])
    return (
        <div className="font-roboto">
            <div className="flex items-center justify-between mx-4 pt-4 my-2">
                <h1 className="text-3xl  md:text-5xl font-semibold md:my-8 text-gray-700">
                    My Cart
                </h1>
                <div className="bg-gray-900 flex text-gray-100 w-44 px-2 py-2 text-md divide-x-2 divide-opacity-30 divide-gray-200 rounded-sm">
                    <span className="px-2">Subtotal</span>
                    <span className="px-2 mr-2 w-28 flex items-center justify-center">${subTotal}</span>
                </div>
            </div>
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
                            <h1>
                                Price: $
                                {(item.quantity * item.price).toFixed(2)}
                                {/* {updateTotal(item.price, item.quantity)} */}
                                 
                            </h1>
                        </div>
                    </div>
                   
                    
                ))
            )}
        </div>
    );
};

export default Cart;
