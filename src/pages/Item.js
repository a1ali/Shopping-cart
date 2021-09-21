import React, { useEffect, useState } from "react";
import CartCircle from "../components/CartCircle";

const Item = ({ match }) => {
    let [item, setItem] = useState({});
    let [loading, setLoading] = useState(true);
    let [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${match.params.id}`)
            .then((res) => res.json())
            .then((res) => {
                setItem(res);
                setLoading(false);
            });
    }, []);

    const increaseQuant = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuant = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            {loading ? (
                <div className="h-93v w-full flex items-center justify-center">
                    <svg
                        className="animate-spin h-16 w-16 md:h-32 md:w-32 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </div>
            ) : (
                <div className="h-93v w-full flex items-center justify-center font-roboto">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="h-52 mt-5 md:mt-0 md:h-96 md:mr-10">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full"
                            />
                        </div>
                        <div className="flex flex-col items-center w-full md:w-1/3 mt-5  md:mx-5">
                            <span className=" text-lg md:text-3xl mx-3  font-semibold pb-3">
                                {item.title}
                            </span>
                            <span className="pb-3 mx-3 ">{item.description}</span>
                            <span className="font-light ">{`Customer rating: ${item.rating.rate}/5`}</span>
                            <span className="pt-3 text-lg font-semibold">${item.price}</span>
                            <div className="text-primary flex items-center my-3 ">
                                <button onClick={() => decreaseQuant()} className="w-10 h-10 rounded-full border-primary border-2 text-3xl mr-3 font-semibold hover:bg-primary hover:text-gray-50 transform transition-all duration-200 ease-in">-</button>
                                <span className="text-2xl mr-3">{quantity}</span>
                                <button onClick={() => increaseQuant()} className="w-10 h-10 rounded-full border-primary border-2 text-3xl hover:bg-primary hover:text-gray-50 transform transition-all duration-200 ease-in ">+</button>
                            </div>
                            <div>
                                <button className="border-2 mb-3 md:mb-0 py-2 px-3 border-coat text-coat hover:bg-coat hover:text-gray-50 rounded-sm transform transition-all duration-200 ease-in">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <CartCircle></CartCircle>
        </div>
    );
};

export default Item;
