import React from "react";
import homeImage from "./../assets/pexels-karolina-grabowska-compressed.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/allActions";
import { motion } from "framer-motion";

const Home = () => {
    const dispatch = useDispatch();
    const { setActiveTab } = bindActionCreators(actionCreators, dispatch);

    return (
        <main className="h-93v 3xl:h-95v flex flex-col md:flex-row items-center w-screen">
            <motion.div className="px-4 sm:px-6 lg:px-8 2xl:px-16 pt-10 sm:pt-12 lg:pt-20 xl:pt-28 pb-4 sm:text-center lg:text-left w-full md:w-1/2 h-1/2 md:h-full flex justify-center flex-col bg-hero-pattern">
                <motion.h1
                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl 2xl:text-8xl"
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: "-30px",
                        },
                        visible: {
                            opacity: 1,
                            y: "0px",
                            transition: {
                                delay: 0.03,
                                ease: "easeIn",
                            },
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="block">The shop for all</span>
                    <span className="block text-indigo-600">your buying needs</span>
                </motion.h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                        <Link
                            to="/Shopping-cart/shop"
                            onClick={() => setActiveTab("shop")}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Shop now
                        </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link
                            to="/Shopping-cart/contact"
                            onClick={() => setActiveTab("contact")}
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </motion.div>

            <img
                className="w-full md:w-1/2 h-1/2 md:mt-0 md:h-93v 3xl:h-95v  object-cover"
                src={homeImage}
                alt=""
            />
        </main>
    );
};

export default Home;
