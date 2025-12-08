import React from "react";

export default function BoxShadow() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="shadow-md w-50 h-50 m-15"></div>
        <div className="shadow-lg w-50 h-50 m-15"></div>
        <div className="shadow-xl w-50 h-50 m-15"></div>

        <div className="shadow-xl/20 w-50 h-50 m-15"></div>
        <div className="shadow-xl/30 w-50 h-50 m-15"></div>

        <button className="m-15 bg-cyan-500 w-30 h-10 shadow-lg shadow-cyan-500/20">
          btn
        </button>
        
        <div className="inset-shadow-sm w-50 h-50 m-15"></div>
        <div className="inset-shadow-sm inset-shadow-blue-400 w-50 h-50 m-15"></div>
      </div>
    </>
  );
}
