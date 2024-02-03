import React from "react";

export default function InputItems({ handleInput }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="w-10/12 bg-gray-500 placeholder:text-black border-2 outline-none py-1 px-3 border-black rounded-md my-2 text-xl"
        placeholder="Add item to buy"
        onKeyDown={handleInput}
      />
    </div>
  );
}
