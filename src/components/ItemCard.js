import React from "react";

const ItemCard = ({ itemImg, itemTitle, itemPrice }) => {
    return (
        <div className="w-36 h-72 md:w-80 md:h-96 m-4 flex flex-col rounded-sm pt-4 border border-opacity-50 bg-white cursor-pointer overflow-hidden shadow-md transform hover:scale-95 ease-in duration-150">
            <img
                src={itemImg}
                alt=""
                className="w-full h-3/4 md:h-3/4 mb-2 p-4  object-contain"
            ></img>
            <div className="h-full md:h-28 w-full bg-gray-600 font-roboto text-gray-100 px-4 py-2 flex flex-col">
                <span className="truncate text-sm pb-2">{itemTitle}</span>
                <span className="text-sm font-semibold">${itemPrice}</span>
            </div>
        </div>

        
    );
};

export default ItemCard;
