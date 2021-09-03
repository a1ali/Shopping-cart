import React from "react";
import undrawShop from "./../assets/undrawShop.svg";
import undrawShop2 from "./../assets/undrawShop2.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center text-center justify-center sm:items-start sm:text-left font-roboto sm:h-93v">
            <div className="flex flex-col sm:w-4/12 sm:ml-8 justify-center sm:h-90v">
                <span className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl font-bold text-gray-700 tracking-wide mt-8 sm:mt-13 ">
                    The all-in-one website for all your buying needs
                </span>
                <span className="text-xl sm:text-4xl 3xl:text-7xl font-bold text-coat tracking-wide mt-3 sm:mt-8  ">
                    Start spending today!
                </span>
                <div className="mt-5 sm:mt-10">
                    <Link
                        to="/Shopping-cart/shop"
                        className="rounded-full  bg-primary px-4 sm:px-8 py-2 sm:py-4 text-gray-100 text-center text-lg sm:text-xl font-semibold"
                    >
                        Shop
                    </Link>
                </div>
            </div>

            <div className="m-5 sm:h-90v flex items-center">
                <img className="transform sm:scale-50 lg:scale-55 xl:scale-60 2xl:scale-65 3xl:scale-75 sm:-mt-8" src={undrawShop2} alt="React Logo" />
            </div>
        </div>
    );
};

export default Home;
