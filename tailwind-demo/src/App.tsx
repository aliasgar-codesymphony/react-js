import { useState } from "react";

import "./App.css";
import Font from "./Font";
import Flex from "./Flex";
import Grid from "./Grid";
import Sizing from "./Sizing";

import Layout from "./Layout";
import Position from "./Position";
import Site from "./Site";
import BoxShadow from "./BoxShadow";
import PdfReader from "./PdfReader";
import AudioPlayer from "./AudioPlayer";
import { ConfigProvider } from "antd";
import VideoPlayer from "./VideoPlayer";
import ModalPrac from "./ModalPrac";
import { StyleProvider } from "@ant-design/cssinjs";
import Demo from "./Demo";
import ModalPrac2 from "./ModalPrac2";
import Website from "./Website";
import MultiVideo from "./MultiVideo";
import { Route, Routes } from "react-router-dom";
import SwiperDemo from "./SwiperDemo";
import AudioCard from "./AudioCard";
import AudioDemo from "./AudioDemo";

import PdfDemo from "./PdfDemo";
import Header from "./Header";
import PdfCard from "./PdfCard";
import ToggleDemo from "./ToggleDemo";

function App() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* <Font/> */}
      {/* <Flex/> */}
      {/* <Grid /> */}
      {/* <Sizing/> */}
      {/* <Spacing/> */}
      {/* <Layout/> */}
      {/* <Position/> */}
      {/* <Site /> */}
      {/* <BoxShadow /> */}
      {/* <PdfReader  pdfUrl="https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf"/> */}
      {/* <ConfigProvider
        theme={{
          components: {
            Slider: {
              handleColor: "red",
              handleSize: 12,
              trackBg: "red",
              trackHoverBg: "red",
              handleActiveColor: "red",
              
            },
          },
        }}
      >
        <AudioPlayer
          name="Meghuchi"
          audioUrl="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
          imageUrl="https://images.pexels.com/photos/30888569/pexels-photo-30888569.jpeg"
        />
      </ConfigProvider> */}

      {/* <VideoPlayer videoUrl="https://youtu.be/jiwSvZ8Nvlo?si=VBxej8LKvmF5EhHu"/> */}

      {/* <StyleProvider layer hashPriority="high">
        <ModalPrac/>  
      </StyleProvider> */}

      {/* <Demo/> */}

      {/* <ModalPrac2/> */}

      {/* <VideoPlayer/> */}

      {/* <MultiVideo /> */}

      <Routes>
        <Route path="/" element={<Website />} />

        <Route path="/watch" element={<SwiperDemo />} />

        {/* <Route
          path="/listen"
          element={
            <AudioPlayer
              name="Meghuchi"
              audioUrl="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3"
              imageUrl="https://images.pexels.com/photos/30888569/pexels-photo-30888569.jpeg"
            />
          }
        /> */}
        <Route path="/listen" element={<AudioCard />} />
        <Route path="/audio-demo" element={<AudioDemo />} />
        {/* <Route
          path="/read"
          element={
            <PdfReader pdfUrl="https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf" />
          }
        /> */}
        <Route path="/read" element={<PdfCard />} />
        <Route path="/pdf-demo" element={<PdfDemo />} />

        <Route path="/header" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
