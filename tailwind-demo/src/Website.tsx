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
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <Header />

      {/* folklog video */}
      <div className="bg-red-500 w-screen h-auto mt-20 xl:mt-35 cursor-pointer">
        <img
          src="https://appfolklog.com/public/web/Image/Folklog-video-img2.png"
          onClick={openModal}
        />
      </div>
      {/* <div className="flex h-150 bg-yellow-500 justify-center items-center"></div> */}

      {/* Something for child section */}

      {/* <div className="flex h-150 bg-yellow-500 justify-center items-center">
        <div className="flex justify-center border-2 border-dashed border-red-600 rounded-2xl w-250">
          <div
            className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              navigate("/watch");
            }}
          >
            <p className="text-xl font-bold text-center text-white select-none">
              Watch
            </p>
          </div>
          <div
            className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              navigate("/listen");
            }}
          >
            <p className="text-xl font-bold text-center text-white select-none">
              Listen
            </p>
          </div>
          <div
            className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              alert("Play not created");
            }}
          >
            <p className="text-xl font-bold text-center text-white select-none">
              Play
            </p>
          </div>
          <div
            className=" m-[40px] rounded-[24px] bg-green-500 h-[200px] w-[150px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              navigate("/read");
            }}
          >
            <p className="text-xl font-bold text-center text-white select-none">
              Read
            </p>
          </div>
        </div>
      </div> */}

      {/* Modal */}
      
      <Modal
        isOpen={videoModal}
        onRequestClose={closeModal}
        /* className=" absolute top-[20px] left-[120px] right-[120px] bottom-[20px] outline-none " */
        className=" absolute top-[50px] left-[200px] right-[200px] bottom-[50px] outline-none "
        overlayClassName="z-2000 fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]"
      >
        <MediaController className="h-full w-full rounded-md ">
          <button
            onClick={closeModal}
            /* className="absolute md:top-5 md:left-325" */
            className={`absolute md:top-5 md:left-285 ${
              fullscreen ? "hidden" : ""
            } `}
            id="btnClose"
          >
            <img src={close2} className="w-10 h-10 cursor-pointer" />
          </button>
          <ReactPlayer
            src="https://appfolklog.com/public/web/Image/folk.mp4"
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
              <div>
                <MediaPlayButton></MediaPlayButton>
                <MediaSeekBackwardButton
                  seekOffset={15}
                ></MediaSeekBackwardButton>
                <MediaSeekForwardButton
                  seekOffset={15}
                ></MediaSeekForwardButton>
              </div>
              <div>
                <MediaTimeDisplay
                  showDuration
                  className="text-[24px]"
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
    </>
  );
}
