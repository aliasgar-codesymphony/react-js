import React, { useRef, useState } from "react";
//import Modal from "react-modal";
import { Modal } from "antd";
import ReactPlayer from "react-player";

export default function ModalPrac() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const videoRef = useRef(null);

  const videoUrl = "https://www.youtube.com/watch?v=yUD0uPHFD4A";

  return (
    <div>
      {/* <button
        onClick={openModal}
        className="border-2 border-blue-500 p-2 m-5 cursor-pointer"
      >
        Open Modal
      </button>

      <Modal
        open={modalIsOpen}
        onCancel={closeModal}
        footer={null}
        className="h-200 w-600"
      >
      </Modal>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=yUD0uPHFD4A"
          controls={true}
          width="100%"
          height="auto"
          style={{ aspectRatio: "16/9" }}
        /> */}
      <div>
        <h2>React Player with TypeScript</h2>
        <ReactPlayer
          src={videoUrl}
          controls={false}
          width="100%"
          height="400px"
          onReady={() => console.log("Player is ready")}
          onEnded={() => console.log("Video ended")}
        />
      </div>

        

    
    </div>
  );
}
