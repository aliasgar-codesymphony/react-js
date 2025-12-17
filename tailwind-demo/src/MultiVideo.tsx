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
import tree from "./assets/tree-mystery.jpg";
import neeli from "./assets/neeli-pahadi.jpg";
import ek_din from "./assets/ek-din-ka-raja.jpg";
import jadui_taviz from "./assets/jadui-taviz.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function MultiVideo() {
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
      <AwesomeSlider bullets={false} className="bg-yellow-500">
        <div>
          
        </div>
      </AwesomeSlider>
    </>
  );
}
