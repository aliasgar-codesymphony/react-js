import React, { useState } from "react";
import logo from "./assets/folklog_logo.png";
import menu from "./assets/hamburger.png";
import { Dialog } from "@headlessui/react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleButton = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div className="z-100 fixed top-0 h-20 xl:h-35  w-screen bg-white  xl:bg-yellow-500  flex items-center justify-between ">
        <div className="xl:ml-40 w-1/2 xl:w-1/3">
          <img src={logo} className="h-20 w-20 xl:h-35 xl:w-35" />
        </div>
        <div
          className={`invisible xl:visible w-1/2 xl:w-2/3 xl:mr-40  flex justify-evenly `}
        >
          <a href="#" className="text-xl font-extrabold">
            Home
          </a>
          <a href="#" className="text-xl font-extrabold">
            About Us
          </a>
          <a href="#" className="text-xl font-extrabold">
            Blogs
          </a>
          <a href="#" className="text-xl font-extrabold">
            Quiz
          </a>
          <a href="#" className="text-xl font-extrabold">
            Folklog At School
          </a>
          <a href="#" className="text-xl font-extrabold">
            Contact Us
          </a>
        </div>
        <div className="xl:hidden mr-4">
          <button
            className="text-lg"
            onClick={() => {
              toggleButton();
            }}
          >
            <img src={menu} className="h-10 w-8" />
          </button>
        </div>
      </div>

      

      <Dialog
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        className="fixed z-40 xl:hidden flex justify-center w-screen h-screen -mt-20 lg:-mt-40 bg-[#2c3e50]"
      >
        <div className="flex flex-col gap-12 ">
          <a
            href="#"
            className="pt-14 text-center text-xl font-bold text-white"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="text-center text-xl font-bold text-white"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            About Us
          </a>
          <a
            href="#"
            className="text-center text-xl font-bold text-white"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-center text-xl font-bold text-white"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Quiz
          </a>
          <a
            href="#"
            className="text-center text-xl font-bold text-white"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Folklog At School
          </a>
          <a
            href="#"
            className="text-center text-xl font-bold text-white"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Contact Us
          </a>
        </div>
      </Dialog>
    </>
  );
}
