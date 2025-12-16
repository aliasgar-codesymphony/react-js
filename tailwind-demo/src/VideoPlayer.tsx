import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoModal from "./components/VideoModal";
import VideoCard from "./components/VideoCard";
import tree from "./assets/tree-mystery.jpg";
import neeli from "./assets/neeli-pahadi.jpg";

export default function VideoPlayer(props: any) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  /*  const openModal = (videoid:number) => {
    setId(videoid);
    setModalIsOpen(true)
  }; */

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
      {/* <div className="ml-5 inline-flex items-center gap-4 ">
        <img
          src={tree}
          className="w-90 h-50 cursor-pointer rounded-md"
          onClick={()=> openModal(1)}
        />
        <img
          src={neeli}
          className="w-90 h-50 cursor-pointer rounded-md"
          onClick={()=> openModal(2)}
        />
      </div>
      <VideoModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        videoUrl="https://www.youtube.com/watch?v=yUD0uPHFD4A"
        id={1}
      />

      <VideoModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        videoUrl="https://youtu.be/_WxsRmKCIK0?si=VzXkUY0OT1v3xf9d"
        id={2}
      /> */}

      {videos.map((video) => {
        return (
          <div>
            <VideoCard
              key={video.id}
              openModal={openModal}
              imageUrl={video.imageUrl}
              details={video}
            />
            <VideoModal
              key={video.id}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              videoUrl={video.videoUrl}
              id={video.id}
            />
          </div>
        );
      })}
    </>
  );
}
