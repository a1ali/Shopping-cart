import React from "react";
import undrawShop2 from "./../assets/undrawShop2.svg";
import homeImage from "./../assets/pexels-karolina-grabowska-5632382.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/allActions";

const Home = () => {
    const dispatch = useDispatch();
    const { setActiveTab } = bindActionCreators(actionCreators, dispatch);

    return (
        // <div className="flex flex-col md:flex-row items-center text-center justify-center md:items-start md:text-left font-roboto md:h-93v">
        //     <div className="flex flex-col md:w-4/12 md:ml-8 lg:ml-16 justify-center md:h-90v">
        //         <span className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-9xl font-bold text-gray-700 tracking-wide mt-8 md:mt-13 ">
        //             The all-in-one website for all your buying needs
        //         </span>
        //         <span className="text-xl md:text-4xl 3xl:text-7xl font-bold text-coat tracking-wide mt-3 md:mt-8  ">
        //             Start spending today!
        //         </span>
        //         <div className="mt-5 md:mt-10">
        //             <Link
        //                 to="/Shopping-cart/shop"
        //                 className="rounded-full  bg-primary px-4 md:px-8 py-2 md:py-4 text-gray-100 text-center text-lg md:text-xl font-semibold"
        //                 onClick={() => setActiveTab("shop")}
        //             >
        //                 Shop
        //             </Link>
        //         </div>
        //     </div>

        //     <div className="m-5 md:h-90v flex items-center">
        //         <img
        //             className="transform md:scale-50 lg:scale-55 xl:scale-60 2xl:scale-65 3xl:scale-75 md:-mt-8"
        //             src={undrawShop2}
        //             alt="React Logo"
        //         />
        //     </div>
        // </div>
        <main class="h-93v 3xl:h-95v flex flex-col md:flex-row items-center w-screen">
            <div class="px-4 sm:px-6 lg:px-8 2xl:px-16 pt-10 sm:pt-12 lg:pt-20 xl:pt-28 pb-4 sm:text-center lg:text-left w-full md:w-1/2 h-1/2 md:h-full flex justify-center flex-col bg-hero-pattern">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl 2xl:text-8xl">
                    <span class="block">The shop for all</span>
                    <span class="block text-indigo-600">
                    your buying needs
                    </span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                        <Link
                            to="/Shopping-cart/shop"
                            onClick={() => setActiveTab("shop")}
                            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Shop now
                        </Link>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                        <Link
                            to="/Shopping-cart/contact"
                            onClick={() => setActiveTab("contact")}
                            class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

            
                <img
                    className="w-full md:w-1/2 h-1/2 md:mt-0 md:h-93v 3xl:h-95v  object-cover"
                    src={homeImage}
                    alt=""
                />
            
        </main>
    );
};

export default Home;
