import React from "react";

export default function Flex() {
  return (
    <>
      <div className="flex flex-row ">
        <div className="bg-green-500  w-50 text-center basis-64 ">1</div>
        <div className="bg-green-500 w-50 text-center basis-64 ">2</div>
        <div className="bg-green-500  w-50 text-center basis-128 order-first">
          3
        </div>
        <div className="bg-green-500 w-50 text-center basis-128 order-last">
          4
        </div>
        <div className="bg-green-500  w-50 text-center basis-64">5</div>
      </div>

      <div className="flex flex-row text-center h-50 w-100 bg-black-500">
        <div className=" bg-blue-500 w-14 flex-1 order-2">1</div>
        <div className=" bg-blue-500 w-64 shrink-0  order-1">2</div>
        <div className=" bg-blue-500 w-64 flex-1 order-0"> 3</div>
      </div>

      <div className="flex flex-row text-center border-2 h-100 ">
        <div className=" bg-pink-500 h-20 w-20 self-start">1</div>
        <div className=" bg-pink-500 h-20 w-20">2</div>
        <div className=" bg-pink-500 h-20 w-20 self-end"> 3</div>
        <div className=" bg-pink-500 h-20 w-20 self-center"> 4</div>
        <div className=" bg-pink-500 h-20 w-20"> 5</div>
      </div>

  
    </>
  );
}
