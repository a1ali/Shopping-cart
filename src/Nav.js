import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/allActions";


const Nav = () => {
    let [menu, setMenu] = useState(false);
    //let [activeTab, setActiveTab] = useState("home");

    const activeTab = useSelector((state) => state.tabReducer);
    const dispatch = useDispatch();
    let cart = useSelector(state => state.cartReducer)
    const { setActiveTab } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="relative">
            <div className="flex justify-between items-center px-8 py-2 h-7v 3xl:h-5v bg-primary text-gray-50 shadow-md font-roboto ">
                <Link to="/" onClick={() => setActiveTab("home")}>
                    <h3 className="text-xl font-bold">ALLMART</h3>
                </Link>
                <ul className="hidden md:flex items-center">
                    <Link
                        to="/"
                        className={`${
                            activeTab === "home" ? "bg-purple-500" : "bg-primary"
                        } px-3 rounded-md py-2`}
                        onClick={() => setActiveTab("home")}
                    >
                        <li>Home</li>
                    </Link>
                    <Link
                        to="/shop"
                        className={`${
                            activeTab === "shop" ? "bg-purple-500" : "bg-primary"
                        } px-3 rounded-md py-2`}
                        onClick={() => setActiveTab("shop")}
                    >
                        <li>Shop</li>
                    </Link>
                    <Link
                        to="/contact"
                        className={`${
                            activeTab === "contact"
                                ? "bg-purple-500"
                                : "bg-primary"
                        } px-3 rounded-md py-2`}
                        onClick={() => setActiveTab("contact")}
                    >
                        <li>Contact</li>
                    </Link>
                    <Link
                        to="/cart"
                        className="px-3"
                        onClick={() => setActiveTab("")}
                    >
                        <li className="relative">
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
                            <div className="absolute -top-2 -right-3 rounded-full h-5 w-5 bg-purple-600 text-center text-sm">
                                <span>{cart.length}</span>
                            </div>
                        </li>
                    </Link>
                </ul>
                <div className="md:hidden" onClick={() => setMenu(!menu)}>
                    {!menu && (
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
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                    {menu && (
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
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </div>
            </div>
            {/* Mobile Dropdown */}
            <div className="md:hidden w-full">
                <AnimatePresence>
                    {menu && (
                        <motion.div
                            className="w-full flex flex-col items-center justify-center bg-primary text-gray-100 font-roboto"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: "auto",
                                opacity: 1,
                            }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Link
                                to="/"
                                className="px-3 py-1 w-full border-b text-center border-t border-gray-200 border-opacity-30"
                                onClick={() => setMenu(false)}
                            >
                                <li className="list-none">Home</li>
                            </Link>
                            <Link
                                to="/shop"
                                className="px-3 py-1 w-full border-b text-center border-gray-200 border-opacity-30"
                                onClick={() => setMenu(false)}
                            >
                                <li className="list-none">Shop</li>
                            </Link>
                            <Link
                                to="/cart"
                                className="px-3 py-1 w-full border-b flex justify-center border-gray-200 border-opacity-30"
                                onClick={() => setMenu(false)}
                            >
                                <li className="list-none flex">Cart</li>
                            </Link>
                            <Link
                                to="/contact"
                                className="px-3 py-1 w-full border-b text-center border-gray-200 border-opacity-30"
                                onClick={() => setMenu(false)}
                            >
                                <li className="list-none">Contact</li>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Nav;
