import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Site() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div className="mb-50">
        <div className="flex fixed top-0 lg:gap-8 bg-blue-300 w-full h-13  items-center lg:justify-center sm:gap-4 justify-around md:justify-around">
          
          <a href="#" className="invisible sm:visible sm:text-lg md:text-xl ">
            Home
          </a>
          <a href="#" className="invisible sm:visible sm:text-lg md:text-xl">
            products
          </a>
          <a href="#" className="invisible sm:visible sm:text-lg md:text-xl">
            About Us
          </a>
          <a href="#" className="invisible sm:visible sm:text-lg md:text-xl">
            Contact Us
          </a>
          <div className="lg:hidden">
            <button
              className="text-lg"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          
        </div>

        <div className="grid grid-cols-1 place-items-center md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5    gap-4 mt-14 ml-1 mr-1 ">
          <div className="border-2 rounded-md border-gray-300  h-100 w-75   flex flex-col items-center">
            <img
              src=" https://images.pexels.com/photos/35072480/pexels-photo-35072480.jpeg"
              className="h-55 w-45"
            />

            <div className="flex flex-col ml-3 mt-3 self-start gap-4 ">
              <p className="text-xl">ProductName</p>
              <p className="text-xl">Price</p>
              <p className="text-xl">Free Delievery</p>
              <p className="text-xl">Rating</p>
            </div>
          </div>
          <div className="border-2 rounded-md border-gray-300  h-100 w-75   flex flex-col items-center">
            <img
              src=" https://images.pexels.com/photos/35072480/pexels-photo-35072480.jpeg"
              className="h-55 w-45"
            />

            <div className="flex flex-col ml-3 mt-3 self-start gap-4 ">
              <p className="text-xl">ProductName</p>
              <p className="text-xl">Price</p>
              <p className="text-xl">Free Delievery</p>
              <p className="text-xl">Rating</p>
            </div>
          </div>
          <div className="border-2 rounded-md border-gray-300  h-100 w-75   flex flex-col items-center">
            <img
              src=" https://images.pexels.com/photos/35072480/pexels-photo-35072480.jpeg"
              className="h-55 w-45"
            />

            <div className="flex flex-col ml-3 mt-3 self-start gap-4 ">
              <p className="text-xl">ProductName</p>
              <p className="text-xl">Price</p>
              <p className="text-xl">Free Delievery</p>
              <p className="text-xl">Rating</p>
            </div>
          </div>
          <div className="bg-red-400 h-90 w-75">1</div>
          <div className="bg-red-400 h-90 w-75">1</div>
        </div>
      </div>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className={"lg:hidden"}
      >
        
          <DialogPanel className="fixed inset-y-0 right-0 z-50  w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex justify-between">
              <h2 className="text-lg">Logo</h2>
              <button
                className="text-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="flex flex-col mt-8 gap-4 ">
              <a href="#" className="text-lg font-medium">
                Home
              </a>
              <a href="#" className="text-lg font-medium">
                products
              </a>
              <a href="#" className="text-lg font-medium">
                About Us
              </a>
              <a href="#" className="text-lg font-medium">
                Contact Us
              </a>
            </div>
          </DialogPanel>
        
      </Dialog>
    </>
  );
}
