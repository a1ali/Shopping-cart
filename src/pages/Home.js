import React from "react";
import undrawShop2 from "./../assets/undrawShop2.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/allActions";

const Home = () => {
    const dispatch = useDispatch();
    const { setActiveTab } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="flex flex-col md:flex-row items-center text-center justify-center md:items-start md:text-left font-roboto md:h-93v">
            <div className="flex flex-col md:w-4/12 md:ml-8 lg:ml-16 justify-center md:h-90v">
                <span className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl font-bold text-gray-700 tracking-wide mt-8 md:mt-13 ">
                    The all-in-one website for all your buying needs
                </span>
                <span className="text-xl md:text-4xl 3xl:text-7xl font-bold text-coat tracking-wide mt-3 md:mt-8  ">
                    Start spending today!
                </span>
                <div className="mt-5 md:mt-10">
                    <Link
                        to="/Shopping-cart/shop"
                        className="rounded-full  bg-primary px-4 md:px-8 py-2 md:py-4 text-gray-100 text-center text-lg md:text-xl font-semibold"
                        onClick={() => setActiveTab("shop")}
                    >
                        Shop
                    </Link>
                </div>
            </div>

            <div className="m-5 md:h-90v flex items-center">
                <img
                    className="transform md:scale-50 lg:scale-55 xl:scale-60 2xl:scale-65 3xl:scale-75 md:-mt-8"
                    src={undrawShop2}
                    alt="React Logo"
                />
            </div>
        </div>
    );
};

export default Home;
