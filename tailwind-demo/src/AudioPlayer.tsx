import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Slider from "@mui/material/Slider";

export default function AudioPlayer(props: any) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio?.pause();
    } else if (isPlaying == false) {
      audio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const plus = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime += 10;
      audio.play();
    }
  };

  const minus = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime -= 10;
      audio.play();
    }
  };

  const handleChange = (event: any, newVal: any) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newVal;
    }
  };

  return (
    <>
      <div className="flex justify-center gap-4">
        <audio ref={audioRef} controls>
          <source src={props.audioUrl} />
        </audio>

        <button
          className="mt-3 border-2 border-green-300 h-10 w-30 "
          onClick={handleClick}
        >
          Play
        </button>

        <button
          className="mt-3 border-2 border-green-300 h-10 w-30 "
          onClick={plus}
        >
          +10
        </button>
        <button
          className="mt-3 border-2 border-green-300 h-10 w-30 "
          onClick={minus}
        >
          -10
        </button>
      </div>

      <div className="mt-20 flex justify-center">
        <Slider
          sx={{ width: "50%" }}
          size="small"
          value={audioRef.current?.currentTime}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
