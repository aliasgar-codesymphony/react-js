import React, { useRef } from "react";
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

export default function Demo() {
  const playerRef = useRef(null);

  // The Media Chrome store needs the *internal* media element, not the ReactPlayer component itself.
  // We can access the internal player via a ref and use an effect to sync it.
  // Note: For advanced integration, using the media-chrome/react/media-store hooks directly provides
  // more robust state management. For a simple setup, connecting the ref works.

  return (
    <MediaController style={{ width: "640px", height: "360px" }}>
      {/* 
        The ReactPlayer is the actual media element. We hide its native controls 
        and apply slot="media" to link it to the MediaController.
      */}
      <ReactPlayer
        ref={playerRef}
        //src="https://www.youtube.com/watch?v=yUD0uPHFD4A"
        src="https://www.pexels.com/download/video/34963042/    "
        controls={false} // Disable native controls
        width="100%"
        height="100%"
        playsInline
        slot="media"
      />

      <MediaControlBar >
        <MediaTimeRange className="bg-transparent"></MediaTimeRange>
      </MediaControlBar>
      <MediaControlBar >
        
        <div className="controls ml-1 mr-1">
          <MediaPlayButton></MediaPlayButton>
          <MediaSeekBackwardButton seekOffset={15}> </MediaSeekBackwardButton>
          <MediaSeekForwardButton seekOffset={15}></MediaSeekForwardButton>
          <MediaTimeDisplay></MediaTimeDisplay>
          <MediaMuteButton></MediaMuteButton>
          <MediaVolumeRange></MediaVolumeRange>
          <MediaFullscreenButton></MediaFullscreenButton>
        </div>
      </MediaControlBar>
    </MediaController>
  );
}
