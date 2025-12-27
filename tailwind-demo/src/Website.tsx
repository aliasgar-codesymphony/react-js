import React, { useState } from "react";
import Modal from "react-modal";
import {
  MediaControlBar,
  MediaPlayButton,
  MediaTimeRange,
  MediaController,
  MediaFullscreenButton,
  MediaMuteButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaVolumeRange,
} from "media-chrome/react";
import ReactPlayer from "react-player";
import close2 from "./assets/close-wb.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

import folk_image from "./assets/folk_image.png";
import folk_video from "./assets/folk.mp4";

import watch from "./assets/watch.png";
import listen from "./assets/listen.png";
import play_image from "./assets/play_image.png";
import read from "./assets/read.png";

import watch2 from "./assets/watch2.png";
import listen2 from "./assets/listen2.png";
import play_image2 from "./assets/play_image2.png";
import read2 from "./assets/read2.png";

import pink_bg from "./assets/pink_bg.png";

import logo from "./assets/folklog_logo.png";
import folkqr from "./assets/folkqr.png";
import appstore from "./assets/appstore.png";
import playstore from "./assets/playstore.png";

export default function Website() {
  const navigate = useNavigate();
  const [videoModal, setVideoModal] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const openModal = () => {
    setVideoModal(true);
  };
  const closeModal = () => {
    setVideoModal(false);
  };

  console.log("Width: " + window.innerWidth);
  console.log("Height: " + window.innerHeight);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <div id="top">
        <Header />
      </div>
      <body className="overflow-x-hidden ">
        {/* folklog video */}
        <div
          className="bg-red-500 w-screen h-auto mt-20 xl:mt-35 cursor-pointer"
          
        >
          <img src={folk_image} onClick={openModal} />
        </div>

        {/* Introduction */}
        <div
          className={` h-185 md:h-120 xl:h-135 w-full bg-[url(./assets/pink_bg.png)] bg-center bg-cover flex  items-center justify-center `}
        >
          {/* <div className="w-[100%] h-[100%] flex items-center justify-center ">
          <div className="w-[100%] h-[100%] p-10"> */}
          <div className="w-[80%]  xl:w-[90%]">
            <p className=" h-auto  xl:w-[100%] text-lg xl:text-xl text-white font-medium ">
              Step into the enchanting world of FolkLog, where the magic of
              Indian folktales comes alive! Our immersive app invites children
              to explore stories rooted in India's rich heritage, rekindling
              their love for these timeless tales.
            </p>
            <br />
            <p className=" h-auto  xl:w-[100%] text-lg xl:text-xl text-white font-medium ">
              FolkLog offers an enchanting experience featuring animated films
              inspired by vibrant folk art styles, vivid flipbooks, interactive
              games, captivating puzzles and engaging audio stories perfect for
              reducing screen time, and more! With content available in multiple
              regional languages, FolkLog ensures that every child finds their
              way back home.
            </p>
          </div>
          {/* </div>
        </div> */}
        </div>

        {/* Something for child section */}
        {/* <div className="flex h-150 bg-yellow-500 justify-center items-center"></div> */}
        <div className="flex h-375 md:h-225 xl:h-175 w-screen  bg-yellow-500 justify-center items-center">
          <div className="flex flex-col  justify-center items-center border-2 border-dashed border-red-500 rounded-2xl m-6  h-325 md:h-175  xl:h-110  xl:w-300">
            <div className="flex inline-flex justify-center">
              <div className="mt-10 md:mt-10  xl:mt-10  flex items-center justify-center ">
                <p className=" text-3xl xl:text-5xl  font-bold text-center  select-none">
                  Something for every child!
                </p>
              </div>
            </div>
            {/* <div className="mt-5 flex    flex-wrap xl:inline-flex  justify-center"> */}
            <div className="mt-5 grid grid-rows md:grid-cols-2  xl:grid-cols-4  justify-center">
              <div
                className=" m-[30px]  rounded-[24px] flex items-center justify-center cursor-pointer"
                onClick={() => {
                  navigate("/watch");
                }}
              >
                {/* <img src={watch} className="hover:  h-[225px] w-[200px]" /> */}

                <div className="group ">
                  <img
                    src={watch}
                    alt="Default"
                    className="group-hover:hidden  h-[225px] w-[200px] "
                  />
                  <img
                    src={watch2}
                    alt="Hover"
                    className="hidden group-hover:block   h-[225px] w-[200px] "
                  />
                </div>
              </div>

              <div
                className=" m-[30px] rounded-[24px]  flex items-center justify-center cursor-pointer"
                onClick={() => {
                  navigate("/listen");
                }}
              >
                {/* <img src={listen} className=" h-[225px] w-[200px]" /> */}
                <div className="group ">
                  <img
                    src={listen}
                    alt="Default"
                    className="group-hover:hidden  h-[225px] w-[200px] "
                  />
                  <img
                    src={listen2}
                    alt="Hover"
                    className="hidden group-hover:block  h-[225px] w-[200px] "
                  />
                </div>
              </div>
              <div
                className=" m-[30px] rounded-[24px] flex items-center justify-center cursor-pointer"
                onClick={() => {
                  alert("Play not created");
                }}
              >
                {/* <img src={play_image} className=" h-[225px] w-[200px]" /> */}
                <div className="group ">
                  <img
                    src={play_image}
                    alt="Default"
                    className="group-hover:hidden  h-[225px] w-[200px] "
                  />
                  <img
                    src={play_image2}
                    alt="Hover"
                    className="hidden group-hover:block   h-[225px] w-[200px] "
                  />
                </div>
              </div>
              <div
                className=" mt-[30px] mb-[30px] rounded-[24px] flex items-center justify-center cursor-pointer"
                onClick={() => {
                  navigate("/read");
                }}
              >
                {/* <img src={read} className=" h-[225px] w-[200px]" /> */}
                <div className="group ">
                  <img
                    src={read}
                    alt="Default"
                    className="group-hover:hidden  h-[225px] w-[200px] "
                  />
                  <img
                    src={read2}
                    alt="Hover"
                    className="hidden group-hover:block  h-[225px] w-[200px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About us section */}

        <div className="w-full h-200 md:h-100 xl:h-80 bg-[url(./assets/pink_bg.png)] bg-center bg-cover flex justify-center items-center">
          <div className=" xl:h-[80%] h-[75%] w-[75%] flex flex-col justify-center gap-3">
            <p className="text-4xl xl:text-5xl font-bold text-white">
              About us
            </p>
            <p className="text-white text-xl ">
              We are Project FolkLog, an initiative of FolkLogue Studios,
              committed to preserving the timeless tradition of folk stories and
              storytelling using modern technology. Since 2015, we have been
              passionately documenting, archiving, and featuring countless
              folktales and storytellers from India and beyond on our digital
              platforms. Our mission is to share the rich cultural heritage of
              India’s diverse storytelling traditions with a wider audience.
            </p>
            <a
              href="#"
              className="text-white h-10 w-23 text-center flex justify-center items-center font-medium bg-green-800 "
            >
              Read More
            </a>
          </div>
        </div>

        {/* Our Vision */}
        {/* h-[90%] w-[80%] */}
        <div className="bg-yellow-500 xs:h-510 h-475 md:h-315 xl:h-205 w-screen flex justify-center items-center">
          <div className="bg-[#D04E40] h-[90%] md:h-[85%] xl:h-[80%] xl:w-[85%] rounded-4xl flex items-center ">
            <div className=" flex flex-col items-center gap-8 xl:gap-4 ">
              <div className=" h-[75%] w-[70%] xl:h-[75%] xl:w-[90%] flex flex-col  gap-2">
                <p className="text-2xl  font-bold text-white">Our Vision</p>
                <p className="text-white text-lg font-medium xl:font-normal">
                  At the heart of FolkLogue Studios is Vandana Pant, our
                  founding director, who is deeply captivated by the art of
                  diverse storytelling traditions in India. Vandana's vision is
                  to provide children everywhere with access to India's treasure
                  trove of folk tales, nurturing a love for our cultural
                  heritage.
                </p>
                <a
                  href="#"
                  className="text-white h-10 w-23 text-center flex justify-center items-center font-medium bg-green-800 "
                >
                  Read More
                </a>
              </div>
              <div className=" h-[75%] w-[70%] xl:h-[75%] xl:w-[90%] flex flex-col  gap-2">
                <p className="text-2xl  font-bold text-white">
                  Creating an Immersive Experience:
                </p>
                <p className="text-white text-lg font-medium xl:font-normal">
                  FolkLog App is an extension of our mission, weaving together a
                  beautiful tapestry of India's socially, culturally, and
                  historically significant stories. Our team of writers,
                  artists, animators, storytellers, and producers work
                  passionately to bring these tales to life through our
                  immersive app.
                </p>
              </div>
              <div className=" h-[75%] w-[70%] xl:h-[75%] xl:w-[90%] flex flex-col  gap-2">
                <p className="text-2xl  font-bold text-white">
                  Our Artistic Masterpieces
                </p>
                <p className="text-white text-lg font-medium xl:font-normal ">
                  Within the FolkLog app, each tale is a masterpiece,
                  intricately woven into its respective folk art form. The folk
                  art from Himachal Pradesh leaps to life in the form of Chamba
                  Rumal, while Madhubani art graces the tales from Bihar. With
                  meticulous attention to detail, we celebrate the splendor of
                  India's diverse artistic heritage.
                </p>
              </div>
              <div className=" h-[75%] w-[70%] xl:h-[75%] xl:w-[90%] flex flex-col  gap-2">
                <p className="text-2xl  font-bold text-white">
                  Our Team of Dreamweavers
                </p>
                <p className="text-white text-lg font-medium xl:font-normal">
                  Behind every enchanting tale is a team of passionate
                  dreamweavers. Our writers, artists, and animators blend
                  tradition with technology, ensuring that every story is a
                  symphony of art, culture, and innovation.
                </p>
                <a
                  href="#"
                  className="text-white h-10 w-23 text-center flex justify-center items-center font-medium bg-green-800 "
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* space */}
        <div className="w-full h-7"></div>
        {/* Footer section */}

        <div className="bg-yellow-500 h-160 w-full rounded-tl-[40px] rounded-tr-[40px]">
          <div className="h-[92%] flex justify-center items-center gap-64">
            

            {/* left  */}

            <div className="bg-[#D04E40] h-110 w-100 rounded-2xl relative flex flex-col items-center">
              <div className="absolute left-[50%] top-[-65px] translate-x-[-50%]">
                <img src={logo} />
              </div>
              <div className="h-13"></div>
              <div className="w-80">
                <p className="text-white text-xl text-center">
                  Scan the code with your camera to download the app
                </p>
              </div>

              <img src={folkqr} className="h-50 w-50 mt-5" />
              <p className="text-white text-lg mt-2">or</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href="https://apps.apple.com/in/app/folk-log-bedtime-stories/id6472716599">
                  <img src={appstore} className="rounded-md " />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.folklog&hl=en_IN">
                  <img src={playstore} className="rounded-md" />
                </a>
              </div>
            </div>

            {/* right */}

            <div className=" h-110 w-100 rounded-2xl relative flex flex-col justify-center gap-4">
              <p>
                <a href="#" className="text-lg font-bold">
                  Home
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  Privacy policy
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  EULA
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  Refund/ Cancellation Policy
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  Address
                </a>
              </p>
              <p>
                <a href="#" className="text-lg font-bold">
                  C-110, Sector-26, NOIDA, UP 201301
                </a>
              </p>
            </div>
            <a href="#top">top</a>
          </div>

          {/* copyright */}
          <div className="flex justify-center">
            <p className="text-lg font-bold">
              Copyright 2025 Folklogue Studios. All rights reserved
            </p>
          </div>
        </div>

        {/* Modal */}

        <Modal
          isOpen={videoModal}
          onRequestClose={closeModal}
          /* className=" absolute top-[20px] left-[120px] right-[120px] bottom-[20px] outline-none " */
          className="absolute top-1/6 left-[20px] right-[20px] bottom-1/6  xl:top-[50px] xl:left-[200px] xl:right-[200px] xl:bottom-[50px] outline-none"
          overlayClassName="z-2000 fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.85)]"
        >
          <MediaController className="h-full w-full rounded-md ">
            <button
              onClick={closeModal}
              /* className="absolute md:top-5 md:left-325" */
              className={`absolute top-1 left-9/10 xl:top-5 xl:left-285 ${
                fullscreen ? "invisible" : "visible"
              } `}
              id="btnClose"
            >
              <img
                src={close2}
                className="w-8/12 h-8/12   xl:w-10 xl:h-10 cursor-pointer"
              />
            </button>
            <ReactPlayer
              src={folk_video}
              //src="https://www.pexels.com/download/video/34963042/"
              controls={false}
              width="100%"
              height="100%"
              slot="media"
              autoPlay
            />

            <MediaControlBar>
              <MediaTimeRange className="bg-transparent"></MediaTimeRange>
            </MediaControlBar>
            <MediaControlBar>
              <div className="flex justify-between items-center w-full ml-1 mr-1">
                <div className="flex gap-2 xl:gap-4">
                  <MediaPlayButton></MediaPlayButton>
                  <MediaSeekBackwardButton
                    seekOffset={15}
                  ></MediaSeekBackwardButton>
                  <MediaSeekForwardButton
                    seekOffset={15}
                  ></MediaSeekForwardButton>
                </div>
                <div className="flex gap-2 xl:gap-4">
                  <MediaTimeDisplay
                    showDuration
                    className="text-[16px]  xl:text-[24px]"
                  ></MediaTimeDisplay>
                  <MediaMuteButton></MediaMuteButton>
                  <MediaVolumeRange></MediaVolumeRange>
                  <MediaFullscreenButton
                    onClick={() => {
                      setFullscreen(!fullscreen);
                    }}
                  ></MediaFullscreenButton>
                </div>
              </div>
            </MediaControlBar>
          </MediaController>
        </Modal>
      </body>
    </>
  );
}
