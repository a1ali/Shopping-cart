import React from "react";

const ItemCard = ({ itemImg, itemTitle, itemPrice }) => {
    return (
        <div className="w-80 h-96 m-2 flex flex-col rounded-sm pt-4 border border-opacity-50 cursor-pointer overflow-hidden shadow-md transform hover:scale-95 ease-in duration-150">
            <img
                src={itemImg}
                alt=""
                className="w-full h-3/4 mb-2 p-4  object-contain"
            ></img>
            <div className="h-28 w-full bg-gray-600 font-roboto text-gray-100 px-4 py-2 flex flex-col">
                <span className="text-sm pb-2">{itemTitle}</span>
                <span className="text-sm font-semibold">${itemPrice}</span>
            </div>
        </div>

        
    );
};

export default ItemCard;
