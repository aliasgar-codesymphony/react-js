import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import {
  MediaController,
  MediaPlayButton,
  MediaMuteButton,
  MediaVolumeRange,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaControlBar,
  MediaFullscreenButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
} from "media-chrome/react";
import { Modal } from "antd";

export default function Demo() {
  const playerRef = useRef(null);

  return (
    <>
      <MediaController style={{ width: "640px", height: "360px" }} >
        <ReactPlayer
          ref={playerRef}
          src="https://www.youtube.com/watch?v=yUD0uPHFD4A"
          //src="https://www.pexels.com/download/video/34963042/    "
          controls={false}
          width="100%"
          height="100%"
          playsInline
          slot="media"
          
        />

        <MediaControlBar>
          <MediaTimeRange className="bg-transparent"></MediaTimeRange>
        </MediaControlBar>
        <MediaControlBar>
          <div className="controls ml-1 mr-1">
            <MediaPlayButton></MediaPlayButton>
            <MediaSeekBackwardButton seekOffset={15}> </MediaSeekBackwardButton>
            <MediaSeekForwardButton seekOffset={15}></MediaSeekForwardButton>
            <MediaTimeDisplay showDuration></MediaTimeDisplay>
            <MediaMuteButton></MediaMuteButton>
            <MediaVolumeRange></MediaVolumeRange>
            <MediaFullscreenButton></MediaFullscreenButton>
          </div>
        </MediaControlBar>
      </MediaController>

    </>
  );
}
