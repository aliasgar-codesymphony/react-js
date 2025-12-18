import React, { useState } from "react";
import audios from "./audios.json";
import AudioPlayer from "./AudioPlayer";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

export default function AudioCard() {

  const navigate = useNavigate();
  return (
    <body className="bg-yellow-500 ">
    <div className="flex items-center h-screen absolute left-15 right-10">
      <div className=" h-full w-full flex flex-row items-center ">
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
        >
          {audios.map((audio: any) => (
            <SwiperSlide>
              <img
                src={audio.imageUrl}
                className="select-none w-90 h-50 cursor-pointer rounded-md"
                onClick={() => {
                  navigate(`/audio-demo/`, { state: { audioData: audio } });
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </body>
  );
}
