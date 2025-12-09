import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  return (
    <>
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
      <AudioPlayer audioUrl="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3" />
    </>
  );
}

export default App;
