import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

export default function ToggleDemo() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleButton = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <div>
      <button
        className="mt-30 border-1 h-10 w-20 text-lg"
        onClick={() => {
          toggleButton();
        }}
      >
        Toggle
      </button>

      <Dialog
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        className="xl:hidden flex justify-center w-screen h-screen mt-20  bg-[#2c3e50]"
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
    </div>
  );
}
