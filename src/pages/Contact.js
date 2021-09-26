import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="bg-hero-pattern h-93v 2xl:h-95v flex items-center justify-center font-roboto">
            <motion.div
                className="w-2/3 h-1/3 md:h-2/5 bg-gray-100 shadow-md rounded-sm flex flex-col items-center py-8 px-4"
                variants={{
                    hidden: {
                        opacity: 0,
                        scale: 0,
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.25,
                            ease: "easeIn",
                        },
                    },
                }}
                initial="hidden"
                animate="visible"
            >
                <span className="text-xl tracking-tight font-semibold text-gray-700 sm:text-3xl md:text-4xl 2xl:text-6xl mb-4">
                    ALLMART Contact Info
                </span>

                <div className="flex flex-col items-center justify-center text-md sm:text-lg md:text-xl md:mt-2 2xl:pt-16">
                    <span>Customer Service Hours:</span>
                    <span>Monday-Friday</span>
                    <span>9AM - 6PM EST</span>
                    <span>Email:</span>
                    <span>customerservice@allmart.com</span>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
