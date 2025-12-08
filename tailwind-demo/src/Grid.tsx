import React from "react";

export default function Grid() {
  return (
    <>
      <div className="grid grid-cols-2 text-center border-2 h-50 place-items-start ">
        <div className=" bg-blue-500 w-15 h-15 ">1</div>
        <div className=" bg-blue-500 w-15 h-15">2</div>

        <div className=" bg-blue-500 w-15 h-15 place-self-end">3</div>
        <div className=" bg-blue-500 w-15 h-15 ">4</div>
      </div>

      <div className="grid grid-cols-6 text-center border-2 h-100 items-center ">
        <div className=" bg-pink-500 ">1</div>
        <div className=" bg-pink-500 col-span-2">2</div>
        <div className=" bg-pink-500 ">3</div>
        <div className=" bg-pink-500 ">4</div>

        <div className=" bg-pink-500 ">1</div>
        <div className=" bg-pink-500 ">2</div>
        <div className=" bg-pink-500 ">3</div>
        <div className=" bg-pink-500 ">4</div>
      </div>

      <div className="grid grid-flow-col  grid-rows-6 text-center border-2 h-100  ">
        <div className=" bg-pink-500 ">1</div>
        <div className=" bg-pink-500 ">2</div>
        <div className=" bg-pink-500 w-25 justify-self-center">3</div>
        <div className=" bg-pink-500 ">4</div>
        <div className=" bg-pink-500 ">1</div>
        <div className=" bg-pink-500 row-span-2">2</div>
        <div className=" bg-pink-500 ">3</div>
        <div className=" bg-pink-500 ">4</div>
        <div className=" bg-pink-500 ">5</div>
      </div>
    </>
  );
}
