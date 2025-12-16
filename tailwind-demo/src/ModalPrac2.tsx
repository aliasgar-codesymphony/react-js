import React, { useRef, useState } from "react";
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
import close from "./assets/close.png";
import { Content } from "antd/es/layout/layout";
import close2 from "./assets/close-wb.png";

export default function ModalPrac2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const playerRef = useRef(null);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <body className="bg-blue-500">
      <div>
        <button
          onClick={openModal}
          className="border-2 border-yellow-500 p-2 m-5 cursor-pointer"
        >
          Open Modal
        </button>

        <Modal
          isOpen={modalIsOpen}
          onAfterClose={closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <MediaController style={{ width: "100%", height: "100%" }}>
            <button onClick={closeModal} className="close-button">
              <img src={close2} className="w-10 h-10 cursor-pointer" />
            </button>
            <ReactPlayer
              ref={playerRef}
              src="https://www.youtube.com/watch?v=yUD0uPHFD4A"
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
              <div className="controls ml-1 mr-1">
                <div>
                  <MediaPlayButton></MediaPlayButton>
                  <MediaSeekBackwardButton seekOffset={15}>
                    {" "}
                  </MediaSeekBackwardButton>
                  <MediaSeekForwardButton
                    seekOffset={15}
                  ></MediaSeekForwardButton>
                </div>
                <div >
                  <MediaTimeDisplay showDuration></MediaTimeDisplay>
                  <MediaMuteButton></MediaMuteButton>
                  <MediaVolumeRange></MediaVolumeRange>
                  <MediaFullscreenButton></MediaFullscreenButton>
                </div>
              </div>
            </MediaControlBar>
          </MediaController>
        </Modal>
      </div>
    </body>
  );
}
