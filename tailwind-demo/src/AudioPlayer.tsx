import React, { useEffect, useRef, useState } from "react";
import { Slider } from "antd";
import play2 from "./assets/play2.png";
import left from "./assets/left-arrow.png";
import right from "./assets/right-arrow.png";
import pause from "./assets/pause.png";

export default function AudioPlayer(props: any) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", updateTime);
    
  }, []);

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
      audio.play()  ;
    }
  };

  const minus = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime -= 10;
      audio.play();
    }
  };

  const sliderChange = (value: number) => {
    setCurrentTime(value);
  };

  const sliderAfterChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const timeFormat = (time: number) => {
    const minutes = Math.round(time / 60);
    const seconds = Math.round(time % 60);
    return `0${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const marks = {
    [0.0]: {
      label: timeFormat(currentTime),
      style: {
        color: "red",
        fontSize: 20,
      },
    },
    [duration]: {
      label: timeFormat(duration),
      style: {
        color: "red",
        fontSize: 20,
      },
    },
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={props.audioUrl} />
      </audio>
      <body className="bg-yellow-500">
        <div className="mt-12 flex flex-col  items-center justify-center gap-3 ">
          <p className=" text-3xl">{props.name}</p>

          <img
            src={props.imageUrl}
            className="w-90 h-110 rounded-3xl border-2 p-2 border-dashed border-red-500"
          />

          <Slider
            className="w-100"
            min={0}
            max={duration}
            marks={marks}
            value={currentTime}
            tooltip={{ open: false }}
            onChange={sliderChange}
            /* onChangeComplete={sliderAfterChange} */
            
          />

          <div className="flex justify-center gap-4">
            <button
              className="h-20 w-20 flex justify-center items-center cursor-pointer"
              onClick={minus}
            >
              <img src={left} className="w-12 h-12" />
            </button>

            <button
              className="bg-green-700 rounded-full h-20 w-20 flex  items-center  pl-6.5  cursor-pointer"
              onClick={handleClick}
            >
              <img src={isPlaying ? pause : play2} className="w-8 h-8 " />
            </button>

            <button
              className="h-20 w-20 flex justify-center items-center cursor-pointer"
              onClick={plus}
            >
              <img src={right} className="w-12 h-12" />
            </button>
          </div>
        </div>
      </body>
    </>
  );
}
