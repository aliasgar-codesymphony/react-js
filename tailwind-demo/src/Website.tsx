import React from "react";

import { Link, useNavigate } from "react-router-dom";
export default function Website() {
  const navigate = useNavigate();

  return (

    <div className="flex h-150 bg-yellow-500 justify-center items-center">
      <div className="flex justify-center border-2 border-dashed border-red-600 rounded-2xl w-250">
        <div
          className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
          onClick={() => {
            navigate("/watch");
          }}
        >
          <p className="text-xl font-bold text-center text-white select-none">Watch</p>
        </div>
        <div
          className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
          onClick={() => {
            navigate("/listen");
          }}
        >
          <p className="text-xl font-bold text-center text-white select-none">Listen</p>
        </div>
        <div
          className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
          onClick={() => {
            alert("Play not created");
          }}
        >
          <p className="text-xl font-bold text-center text-white select-none">Play</p>
        </div>
        <div
          className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
          onClick={() => {
            navigate("/read");
          }}
        >
          <p className="text-xl font-bold text-center text-white select-none">Read</p>
        </div>
      </div>
    </div>
  );
}
