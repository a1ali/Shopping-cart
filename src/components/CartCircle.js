import React from "react";
import { Link } from "react-router-dom";

const cartCircle = () => {
    return (
        <div className="absolute bottom-0 right-0 m-4 mb-14 md:hidden">
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
        </div>
    );
};

export default cartCircle;
