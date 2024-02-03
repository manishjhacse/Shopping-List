import React from "react";
import { IoClose } from "react-icons/io5";
export default function Item({ item, bought, handleBuyButton,handleClose }) {
  return (
    <li
      className={`flex rounded-md my-2 py-1.5 items-center  justify-between px-2 ${
        bought && "bg-gray-700 text-white"
      } transition-all duration-500 shadow-sm shadow-black`}
      key={item}
    >
      <span className={`text-[22px] font-bold`}>{item}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={handleBuyButton}
          className={`text-white ${
            bought
              ? "bg-gray-500 text-black hover:bg-gray-600"
              : "bg-gray-700 hover:bg-gray-800"
          } font-bold  rounded-lg text-md px-5 py-1.5 me-2  transition-all duration-500`}
        >
          {bought ? <span>Bought</span> : <span>Buy</span>}
        </button>
        <span onClick={handleClose} className="text-xl font-bold cursor-pointer">
          <IoClose />
        </span>
      </div>
    </li>
  );
}
