import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
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
import tree from "./assets/tree-mystery.jpg";
import neeli from "./assets/neeli-pahadi.jpg";
import ek_din from "./assets/ek-din-ka-raja.jpg";
import jadui_taviz from "./assets/jadui-taviz.jpg";
import Header from "./Header";

export default function SwiperDemo() {
  const [id, setId] = useState(0);

  const openModal = (id: number) => {
    setId(id);
  };
  const closeModal = () => {
    setId(0);
  };
  const videos = [
    {
      id: 1,
      imageUrl: tree,
      videoUrl: "https://www.youtube.com/watch?v=yUD0uPHFD4A",
    },
    {
      id: 2,
      imageUrl: neeli,
      videoUrl: "https://youtu.be/_WxsRmKCIK0?si=VzXkUY0OT1v3xf9d",
    },
    {
      id: 3,
      imageUrl: ek_din,
      videoUrl: "https://youtube.com/watch?v=4wOlEkhusHk",
    },
    {
      id: 4,
      imageUrl: jadui_taviz,
      videoUrl: "https://youtu.be/A5bOFOPi2c4?si=kmbuQ7_Y129C-9RG",
    },
    {
      id: 4,
      imageUrl: jadui_taviz,
      videoUrl: "https://youtu.be/A5bOFOPi2c4?si=kmbuQ7_Y129C-9RG",
    },
  ];
  return (
    <>
      <Header />
      <body className=" bg-yellow-500 ">
        <div className="flex items-center h-screen absolute left-15 right-10">
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
          >
            <div className=" h-full w-full flex flex-row  items-center gap-4">
              {videos.map((video: any) => (
                <SwiperSlide>
                  <img
                    src={video.imageUrl}
                    className="select-none w-90 h-50 cursor-pointer rounded-md"
                    onClick={() => {
                      openModal(video.id);
                    }}
                  />
                </SwiperSlide>
              ))}
            </div>

            {videos.map((video: any) => (
              <Modal
                isOpen={id === video.id}
                onRequestClose={closeModal}
                /* className=" absolute top-[20px] left-[120px] right-[120px] bottom-[20px] outline-none " */
                className=" absolute top-[50px] left-[200px] right-[200px] bottom-[50px] outline-none "
                overlayClassName="z-2000 fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]"
              >
                <MediaController className="h-full w-full rounded-md ">
                  <button
                    onClick={closeModal}
                    /* className="absolute md:top-5 md:left-325" */
                    className="absolute md:top-5 md:left-285"
                  >
                    <img src={close2} className="w-10 h-10 cursor-pointer" />
                  </button>
                  <ReactPlayer
                    src={video.videoUrl}
                    //src="https://www.pexels.com/download/video/34963042/"
                    controls={false}
                    width="100%"
                    height="100%"
                    slot="media"
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
                        <MediaFullscreenButton></MediaFullscreenButton>
                      </div>
                    </div>
                  </MediaControlBar>
                </MediaController>
              </Modal>
            ))}
          </Swiper>
        </div>
      </body>
    </>
  );
}
