import React, { useState } from "react";
import suit from "./../assets/suit.svg";
import necklace from "./../assets/necklace.svg";
import dress from "./../assets/dress.svg";
import electronics from "./../assets/electronics.svg";
import all from "./../assets/all.svg";

const Shop = () => {
    let [items, setItems] = useState([]);
    let [activeTab, setActiveTab] = useState("all");

    return (
        <div className="flex flex-col md:flex-row h-93v">
            <div className="flex items-center md:flex-col w-full">
                <ul className="flex justify-center w-full pt-2 font-roboto text-sm border-b">
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 border-transparent ${
                            activeTab === "all" ? "border-b-2 border-coat" : ""
                        } `}
                        onClick={() => {setActiveTab('all')}}
                    >
                        <img className="h-10" src={all} alt="" />
                        <span className="pb-2">All</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 border-transparent ${
                            activeTab === "mens" ? "border-b-2 border-coat" : ""
                        }`}
                        onClick={() => {setActiveTab('mens')}}
                    >
                        <img className="h-10" src={suit} alt="" />
                        <span className="pb-2">Mens</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 border-transparent ${
                            activeTab === "womens"
                                ? "border-b-2 border-coat"
                                : ""
                        }`}
                        onClick={() => {setActiveTab('womens')}}

                    >
                        <img className="h-10" src={dress} alt="" />
                        <span className="pb-2">Womens</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 border-transparent ${
                            activeTab === "jewelry"
                                ? "border-b-2 border-coat"
                                : ""
                        }`}
                        onClick={() => {setActiveTab('jewelry')}}

                    >
                        <img className="h-10" src={necklace} alt="" />
                        <span className="pb-2">Jewelry</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 border-transparent ${
                            activeTab === "electronics"
                                ? "border-b-2 border-coat"
                                : ""
                        }`}
                        onClick={() => {setActiveTab('electronics')}}

                    >
                        <img className="h-10" src={electronics} alt="" />
                        <span className="pb-2">Electronics</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Shop;
