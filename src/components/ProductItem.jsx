import React from "react";

function ProductItem({ image, title, description, price }) {
  return (
    <li className="flex items-center gap-4 lg:py-4 p-2 lg:px-6 bg-white border-gray-200 rounded-lg hover:bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <img
        className="w-20 h-20 object-cover lg:rounded-full lg:mr-2 mr-4"
        src={image}
        alt="User avatar"
      />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base">{description}</p>
        <div className="text-gray-700 text-base">
          <span className="font-bold text-teal-700">price: </span>
          {price} <span className="text-amber-300">$</span>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
