import React, { useState } from "react";
import pdfs from "./pdfs.json";
import AudioPlayer from "./AudioPlayer";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import Header from "./Header";

export default function PdfCard() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <body className="bg-yellow-500 ">
        <div className="flex items-center h-screen absolute left-15 right-10">
          <div className=" h-full w-full flex flex-row items-center ">
            <Swiper
              spaceBetween={0}
              slidesPerView={4}
              navigation={true}
              modules={[Navigation]}
            >
              {pdfs.map((pdf: any) => (
                <SwiperSlide>
                  <img
                    src={pdf.imageUrl}
                    className="select-none w-90 h-50 cursor-pointer rounded-md"
                    onClick={() => {
                      navigate(`/pdf-demo`, { state: { pdfData: pdf } });
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </body>
    </>
  );
}
