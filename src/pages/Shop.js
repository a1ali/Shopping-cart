import React, { useState, useEffect } from "react";
import suit from "./../assets/suit.svg";
import necklace from "./../assets/necklace.svg";
import dress from "./../assets/dress.svg";
import electronics from "./../assets/electronics.svg";
import all from "./../assets/all.svg";
import { Link } from "react-router-dom";
import ItemCard from "./../components/ItemCard";
import CartCircle from "../components/CartCircle";
import { useSelector, useDispatch } from "react-redux";

const Shop = () => {
    let [items, setItems] = useState([]);
    let [activeTab, setActiveTab] = useState("all");
    let [loading, setLoading] = useState(true);

    let cart = useSelector((state) => state.cartReducer)
    
    // useEffect(() => {
    //     console.log(cart)
    // }, [cart])
   

    useEffect(() => {
        setLoading(true);
        if (activeTab === "all") {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((json) => {
                    setItems(json);
                    setLoading(false);
                });
        } else {
            fetch(`https://fakestoreapi.com/products/category/${activeTab}`)
                .then((res) => res.json())
                .then((json) => {
                    setItems(json);
                    setLoading(false);
                });
        }
    }, [activeTab]);

    return (
        <div className="flex flex-col md:flex-row  h-93v 3xl:h-95v  relative">
            <div className="flex items-center justify-center w-full md:w-24 md:h-full">
                <ul className="flex justify-center md:h-full md:flex-col w-full pt-2 md:pt-0 font-roboto text-sm border-b md:border-b-0 md:border-r">
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 md:py-2 ${
                            activeTab === "all"
                                ? "border-coat"
                                : "border-transparent"
                        } `}
                        onClick={() => {
                            setActiveTab("all");
                        }}
                    >
                        <img className="h-10" src={all} alt="" />
                        <span className="pb-2 md:pb-0">All</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2   md:border-b-0 border-transparent md:py-2 ${
                            activeTab === "men's clothing" ? " border-coat" : ""
                        }`}
                        onClick={() => {
                            setActiveTab("men's clothing");
                        }}
                    >
                        <img className="h-10" src={suit} alt="" />
                        <span className="pb-2 md:pb-0">Mens</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 border-transparent md:py-2 ${
                            activeTab === "women's clothing"
                                ? "border-coat"
                                : ""
                        }`}
                        onClick={() => {
                            setActiveTab("women's clothing");
                        }}
                    >
                        <img className="h-10" src={dress} alt="" />
                        <span className="pb-2 md:pb-0">Womens</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 border-transparent md:py-2 ${
                            activeTab === "jewelery" ? "border-coat" : ""
                        }`}
                        onClick={() => {
                            setActiveTab("jewelery");
                        }}
                    >
                        <img className="h-10" src={necklace} alt="" />
                        <span className="pb-2 md:pb-0">Jewelery</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 md:border-r-2  md:border-b-0 border-transparent md:py-2 ${
                            activeTab === "electronics" ? "border-coat" : ""
                        }`}
                        onClick={() => {
                            setActiveTab("electronics");
                        }}
                    >
                        <img className="h-10" src={electronics} alt="" />
                        <span className="pb-2 md:pb-0">Electronics</span>
                    </li>
                </ul>
            </div>

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
                <div className="overflow-y-auto flex flex-wrap w-full justify-center">
                    {items.map((item) => (
                        <Link to={`/Shopping-cart/shop/${item.id}`}>
                            <ItemCard
                                itemImg={item.image}
                                itemTitle={item.title}
                                itemPrice={item.price}
                                key={item.id}
                            ></ItemCard>
                        </Link>
                    ))}
                </div>
            )}

            {/* <div className="absolute bottom-0 right-0 m-4 mb-14 md:hidden">
                <Link
                    to="/Shopping-cart/cart"
                    className="h-16 w-16 rounded-full bg-primary shadow-md flex items-center justify-center text-gray-100 font-roboto"
                >
                    <li className="relative list-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <div className="absolute -top-2 -right-3 rounded-full h-5 w-5 bg-purple-700 text-center text-sm">
                            <span>0</span>
                        </div>
                    </li>
                </Link>
            </div> */}
            {/* <cartCircle></cartCircle> */}

            <CartCircle></CartCircle>
        </div>
    );
};

export default Shop;
