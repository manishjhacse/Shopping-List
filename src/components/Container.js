import React from "react";

export default function Container({ children }) {
  return (
    <div className="w-full h-fit bg-gray-500 shadow-md shadow-black max-w-[500px] max border-black border py-2 px-1 rounded-md">
      {children}
    </div>
  );
}
