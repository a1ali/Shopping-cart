import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/allActions";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Cart = () => {
    const svgVariants = {
        hidden: { rotate: 45 },
        visible: {
            rotate: 0,
            transition: { duration: 1 },
        },
    };

    const pathVariants = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: { duration: 2, ease: "easeInOut" },
        },
    };

    let [anim, setAnim] = useState(false);
    const toggleAnim = () => {
        pathVariants.hidden.pathLength = 0;
        setAnim(true);
        setTimeout(() => {
            setAnim(false);
        }, 300);
    };

    let [initialAnimate, setInitialAnimate] = useState(true);

    let cart = useSelector((state) => state.cartReducer);
    let [subTotal, setSubtotal] = useState(0);
    let dispatch = useDispatch();
    const { removeFromCart } = bindActionCreators(actionCreators, dispatch);

    const updateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        setSubtotal(total.toFixed(2));
    };

    useEffect(() => {
        updateTotal();
    }, [cart]);

    return (
        <div className="font-roboto">
            <div className="flex items-center justify-between mx-4 md:mx-20 pt-4 my-2">
                <h1 className="text-3xl  md:text-5xl font-semibold md:my-8 text-gray-700">
                    My Cart
                </h1>
                <div className="bg-gray-900 flex text-gray-100 w-44 px-2 py-2 text-md divide-x-2 divide-opacity-30 divide-gray-200 rounded-sm">
                    <span className="px-2">Subtotal</span>
                    <span className="px-2 mr-2 w-28 flex items-center justify-center">
                        ${subTotal}
                    </span>
                </div>
            </div>
            {cart.length === 0 ? (
                <motion.div className="flex h-70v flex-col items-center justify-center"
                    variants={{
                        hidden: {
                            y:-30,
                            opacity:0,
                        },
                        visible: {
                            y:0,
                            opacity:1,
                            transition: {
                                delay: "100ms",
                                ease: "easeIn"
                            }
                        }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="text-7xl md:text-9xl my-4 md:my-6">
                        😢
                    </span>{" "}
                    <span className="text-xl md:text-3xl">
                        Your cart is currently empty.
                    </span>
                </motion.div>
            ) : (
                cart.map((item, i) => (
                    <AnimatePresence>
                        <motion.div
                            key={item.id}
                            className="relative mx-4 my-6 md:mx-20 flex items-center border p-2 divide-x-2 divide-gray-300 divide-opacity-50 rounded-sm  hover:shadow-md border-opacity-50 transform duration-200 ease-in"
    
                            variants={{
                                hiddenInit: i => ({
                                    opacity:0,
                                    y: -5 * i,
                                }),
                                hidden: {
                                    opacity:1,
                                },
                                visibleInit: i => ({
                                    opacity:1,
                                    y: 0,
                                    transition: {
                                        delay: i * 0.05,
                                        ease: "easeIn"
                                    }
                                }),
                                visible: {
                                    opacity:1,
                                },
                                exit: {
                                    opacity:0, 
                                }
                            }}
                            initial={initialAnimate ? "hiddenInit": "hidden"}
                            // animate="visible"
                            animate={initialAnimate ? "visibleInit": "visible"}
                            // exit="exit"
                            custom={i}
                            
                        >
                            <Link
                                className="mr-3 h-20 w-20 object-contain flex items-center justify-center"
                                to={`/Shopping-cart/shop/${item.itemId}`}
                            >
                                <img className="p-1 md:p-3" src={item.image} alt="" />
                            </Link>
                            <div className="pl-4 w-full overflow-hidden">
                                <div className="flex justify-between items-center w-full">
                                    <Link
                                        className="truncate text-xl font-semibold w-5/6"
                                        to={`/Shopping-cart/shop/${item.itemId}`}
                                    >
                                        <span>{item.title}</span>
                                    </Link>
                                    <span
                                        className="text-4xl font-light transform -translate-y-2 rotate-45 cursor-pointer"
                                        onClick={() => {
                                            removeFromCart(item.id)
                                            setInitialAnimate(false);
                                        }}
                                    >
                                        +
                                    </span>
                                </div>
                                <h1>{item.clothing ? `Size: ${item.size}`: ""}</h1>
                                <h1>Quantity: {item.quantity}</h1>
                                <h1>
                                    Total Price: $
                                    {(item.quantity * item.price).toFixed(2)}
                                </h1>
                            </div>
                        </motion.div>
                         </AnimatePresence>
                    ))
            )}

            {cart.length > 0 ? (
                <div className="w-full my-4 md:my-8 flex items-center justify-center md:justify-start md:flex-row-reverse md:pr-20">
                    <motion.button
                        className="bg-green-600 w-36 h-11  flex items-center justify-center text-gray-100 text-lg divide-x-2 divide-green-200 divide-opacity-50 lowercase space-x-2 rounded-sm transform delay-100 ease-in hover:bg-green-500"
                        onClick={() => {
                            toggleAnim()
                            setTimeout(() => {
                                window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                            }, 1650)
                        }}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            variants={svgVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.path
                                variants={pathVariants}
                                animate={anim ? "hidden" : "visible"}
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </motion.svg>

                        <span className="pl-2">CHECKOUT</span>
                    </motion.button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cart;
