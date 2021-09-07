import React, { useState } from "react";
import suit from "./../assets/suit.svg";
import necklace from "./../assets/necklace.svg";
import dress from "./../assets/dress.svg";
import electronics from "./../assets/electronics.svg";
import all from "./../assets/all.svg";
import { Link } from "react-router-dom";

const Shop = () => {
    let [items, setItems] = useState([]);
    let [activeTab, setActiveTab] = useState("all");

    return (
        <div className="flex flex-col  h-93v relative">
            <div className="w-full">
                <ul className="flex justify-center w-full pt-2 font-roboto text-sm border-b">
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 border-transparent ${
                            activeTab === "all" ? "border-b-2 border-coat" : ""
                        } `}
                        onClick={() => {
                            setActiveTab("all");
                        }}
                    >
                        <img className="h-10" src={all} alt="" />
                        <span className="pb-2">All</span>
                    </li>
                    <li
                        className={`flex flex-col items-center justify-center px-3 cursor-pointer border-b-2 border-transparent ${
                            activeTab === "mens" ? "border-b-2 border-coat" : ""
                        }`}
                        onClick={() => {
                            setActiveTab("mens");
                        }}
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
                        onClick={() => {
                            setActiveTab("womens");
                        }}
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
                        onClick={() => {
                            setActiveTab("jewelry");
                        }}
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
                        onClick={() => {
                            setActiveTab("electronics");
                        }}
                    >
                        <img className="h-10" src={electronics} alt="" />
                        <span className="pb-2">Electronics</span>
                    </li>
                </ul>
            </div>

            <div className="overflow-y-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                incidunt debitis, hic expedita ad eaque praesentium magnam
                repellendus. Labore beatae est explicabo fugiat, iure quis
                tempora facilis cumque officia velit! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Rerum, a. Ea quia atque
                minima? Doloribus tempora aspernatur officia eaque nesciunt
                suscipit aliquam neque, placeat ipsam ipsum nostrum? Fugiat,
                iste quam?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sit eaque reprehenderit? Quae hic laborum eius blanditiis odit accusantium. Quia quis vel soluta temporibus adipisci ullam libero, sit assumenda commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe blanditiis, qui non dolore voluptatibus ipsa, optio obcaecati est velit officiis alias fuga laborum laboriosam aliquid id odio eaque nemo!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis amet neque unde, quas cumque harum nemo, repellendus quasi eius, quisquam placeat porro suscipit possimus laudantium magnam sit. Repellat, praesentium vitae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum, harum possimus esse nihil sit qui deleniti vitae? Magnam officia illum eveniet voluptatem nulla numquam, similique consequatur. Impedit, maiores autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta consequuntur totam sequi. Esse quam consequatur asperiores quos nostrum ea quas, molestias nesciunt aspernatur accusantium, minima eius cumque, facilis id.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deleniti incidunt omnis culpa mollitia perferendis illum expedita. Inventore sed consectetur hic, suscipit beatae, neque quia aliquid reprehenderit, facilis ipsam expedita.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam officiis animi modi, omnis illo tenetur ullam molestias illum dolor libero, dolorum cum unde! Tempora iusto eligendi laudantium non vero.
                Accusantium alias numquam nam ducimus atque quasi ab reiciendis officiis, aliquid mollitia hic, sapiente veritatis dolores sunt voluptatum eveniet est officia? Voluptatibus inventore facere fugit, sint ullam exercitationem excepturi eos!
                Voluptas ducimus laborum hic quis vitae repellendus tempore ipsam dicta aut placeat earum sequi esse labore, quia ut obcaecati. Minima tempora repellat deleniti et cum dicta adipisci sapiente facilis excepturi!
                Earum at tempore quam unde nulla, nihil voluptate eum laudantium enim similique, ratione, cupiditate ipsa possimus! Possimus doloremque numquam temporibus consequatur? Ullam facere voluptate perspiciatis, cumque dolor consectetur officia quaerat.
                Provident dolor autem, incidunt a repudiandae quae quaerat nam tempore error enim assumenda tenetur. Aperiam repudiandae voluptate ad quibusdam dolore aut temporibus dicta aspernatur illo rem fugiat, non culpa doloribus!

            </div>

            <div className="absolute bottom-0 right-0 m-4 md:hidden">
                <Link to="/Shopping-cart/cart" className="h-16 w-16 rounded-full bg-primary shadow-md flex items-center justify-center text-gray-100 font-roboto">
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
        </div>
    );
};

export default Shop;
