import React, { useEffect, useRef, useState } from "react";
import { Slider } from "antd";
import play2 from "./assets/play2.png";
import left from "./assets/left-arrow.png";
import right from "./assets/right-arrow.png";
import pause from "./assets/pause.png";
import { formatTime } from "media-chrome/dist/utils/time.js";
import { useLocation, useParams } from "react-router-dom";
import audios from "./audios.json";
import Header from "./Header";

export default function AudioDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioInfo, setAudioInfo] = useState(Object);
  const location = useLocation();
  const { audioData } = location.state;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    setAudioInfo(audioData);
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
    }
  };

  const minus = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime -= 10;
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
        <source src={audioInfo.audioUrl} />
      </audio>
      <Header />
      <body className="bg-yellow-500 w-full mb-20">
        <div className="mt-25 xl:mt-33 flex flex-col items-center justify-center gap-3 ">
          <p className=" text-2xl xl:text-3xl">{audioInfo.name}</p>

          <img
            src={audioInfo.imageUrl}
            className=" w-65 h-80  md:w-80 md:h-100 xl:w-90 xl:h-110 rounded-3xl border-2 p-2 border-dashed border-red-500"
          />

          <Slider
            className="w-70 md:w-100"
            min={0}
            max={duration}
            marks={marks}
            tooltip={{ open: false }}
            onChange={sliderChange}
            onAfterChange={sliderAfterChange}
            value={currentTime}
          />

          <div className="w-full flex justify-center gap-4">
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
