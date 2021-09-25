import React from 'react'
import { motion } from 'framer-motion'
const Error = () => {
    return (
        <div className="flex h-70v w-full flex-col items-center justify-center">
        <motion.div
            className="flex flex-col items-center bg-red-600 bg-opacity-80 rounded-md text-gray-50 py-8 mx-2 shadow-md"
            variants={{
                hidden: {
                    y: -30,
                    opacity: 0,
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: "100ms",
                        ease: "easeIn",
                    },
                },
            }}
            initial="hidden"
            animate="visible"
        >
            <span className="text-7xl md:text-9xl py-4 md:py-6 px-8">
                😢
            </span>{" "}
            <span className="text-xl md:text-3xl text-center py-4 md:py-6 px-8">
                Unable to retrieve products, please try again later.
            </span>
        </motion.div>
    </div>
    )
}

export default Error
