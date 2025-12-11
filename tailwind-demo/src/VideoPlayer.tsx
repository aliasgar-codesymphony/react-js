import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoModal from "./VideoModal";
export default function VideoPlayer(props: any) {

    const [modalIsOpen,setModalIsOpen] = useState(false)
    
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

  return (
    <>
    <div>
        <div className="flex ml-5 h-screen items-center gap-4">
           <img src="https://cdn.pixabay.com/photo/2025/09/13/02/18/vietnam-9831328_640.png" onClick={openModal} className="w-90 h-50 cursor-pointer" /> 
           <VideoModal isOpen={openModal} onRequestClose={closeModal} />
      </div>
    </div>
      
    </>
  );
}
{
  /* <video controls className="w-200 h-100" muted>
          <source src={props.videoUrl}  type="video/mp4"/>
        </video> */
}
