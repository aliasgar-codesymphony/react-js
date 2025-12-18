import React, { useState } from "react";
import logo from "./assets/folklog_logo.png";
import menu from "./assets/hamburger.png";
import { Dialog } from "@headlessui/react";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div className="fixed top-0 h-20 xl:h-40  w-screen font-serif bg-yellow-500  flex items-center justify-between ">
        <div className="  xl:ml-40 w-1/2 xl:w-1/3">
          <img src={logo} className="h-20 w-20 xl:h-40 xl:w-40" />
        </div>
        <div
          className={`invisible xl:visible w-1/2 xl:w-2/3 xl:mr-40 flex justify-evenly `}
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
              setMobileMenuOpen(true);
            }}
          >
            <img src={menu} className="h-10 w-8" />
          </button>
        </div>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="flex justify-center w-screen h-screen mt-20  bg-blue-800"
      >
        <div className="grid grid-cols-1 gap-0 border-2">
          <a href="#" className="text-center text-xl font-extrabold ">
            Home
          </a>
          <a href="#" className="items-start text-xl font-extrabold">
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

        {/* 
            <ul className="flex flex-rows justify-center w-screen h-screen mt-20 gap-4">
              <li>
                <a href="#" className="text-xl font-extrabold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" text-xl font-extrabold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xl font-extrabold">
                  Blogs
                </a>
              </li>
            </ul> */}
      </Dialog>
    </>
  );
}
