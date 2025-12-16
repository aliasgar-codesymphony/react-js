import React, { use, useState } from "react";
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
import close2 from "../assets/close-wb.png";
import tree from "../assets/tree-mystery.jpg";
import neeli from "../assets/neeli-pahadi.jpg";

export default function VideoModal({
  isOpen,
  onRequestClose,
  videoUrl,
  id,
}: any) {
  console.log(videoUrl);

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
  ];
  return (
    <>
      {videos.map((video: any) => {
        <Modal
          isOpen={id == video.id ? isOpen : false}
          onRequestClose={onRequestClose}
          className="absolute top-[20px] left-[120px] right-[120px] bottom-[20px] outline-none "
          overlayClassName="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)]"
          
        >
          <MediaController className="h-full w-full rounded-md">
            <button
              onClick={onRequestClose}
              className="absolute md:top-5 md:left-325"
            >
              <img src={close2} className="w-10 h-10 cursor-pointer" />
            </button>
            <ReactPlayer
              src={videoUrl}
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
        </Modal>;
      })}
    </>
  );
}
