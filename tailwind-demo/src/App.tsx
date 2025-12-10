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

function App() {
  return (
    <>
      <ConfigProvider
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
      </ConfigProvider>
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
    </>
  );
}

export default App;
