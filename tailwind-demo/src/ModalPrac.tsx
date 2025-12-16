import React, { useRef, useState } from "react";
//import Modal from "react-modal";
import { Modal } from "antd";
import ReactPlayer from "react-player";
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

export default function ModalPrac() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const playerRef = useRef(null);

  return (
    <div>
      <button
        onClick={openModal}
        className="border-2 border-blue-500 p-2 m-5 cursor-pointer"
      >
        Open Modal
      </button>

    
      <Modal
        open={modalIsOpen}
        onCancel={closeModal}
        footer={null}
        width={1000}
        style={{backgroundColor:'red'}}
        centered={true}
        
      >
        <MediaController >
          <ReactPlayer
            ref={playerRef}
            src="https://www.youtube.com/watch?v=yUD0uPHFD4A"
            //src="https://www.pexels.com/download/video/34963042/    "
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
              <MediaPlayButton></MediaPlayButton>
              <MediaSeekBackwardButton seekOffset={15}>
                {" "}
              </MediaSeekBackwardButton>
              <MediaSeekForwardButton seekOffset={15}></MediaSeekForwardButton>
              <MediaTimeDisplay showDuration></MediaTimeDisplay>
              <MediaMuteButton></MediaMuteButton>
              <MediaVolumeRange></MediaVolumeRange>
              <MediaFullscreenButton></MediaFullscreenButton>
            </div>
          </MediaControlBar>
        </MediaController>
      </Modal>
    </div>
  );
}
