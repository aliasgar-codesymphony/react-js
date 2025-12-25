import React, { useEffect, useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useLocation } from "react-router-dom";
import journal from "./assets/journal.pdf";

import forward from "./assets/forward.png";
import backward from "./assets/backward.png";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfDemo() {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [pdfInfo, setpdfInfo] = useState(Object);

  const location = useLocation();
  const { pdfData } = location.state;

  useEffect(() => {
    setpdfInfo(pdfData);
  }, [pdfInfo.pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <>
      {/* mobile design */}
      <body className="bg-red-400">
        <div className="flex md:hidden flex-col items-center justify-center h-screen w-full  gap-4 ">
          <h2 className="  text-xl">{pdfInfo.name}</h2>
          <div className=" h-3/4 w-[90%] border-7 border-green-800 overflow-auto">
            <Document
              file={pdfInfo.pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>

          <div className="flex flex-row w-[90%] md:hidden justify-between ">
            <button className=" h-16 w-16 cursor-pointer " onClick={prevPage}>
              <img src={backward} />
            </button>
            <button className=" h-16 w-16  cursor-pointer" onClick={nextPage}>
              <img src={forward} />
            </button>
          </div>
        </div>

        {/* design for medium screens and higher */}
        <div className="hidden md:flex flex-col h-screen w-screen  items-center justify-center gap-0">
          <h2 className="text-3xl ">{pdfInfo.name}</h2>
          <div className=" flex justify-center items-center md:h-[70%] lg:h-[90%] gap-4 md:w-[90%] lg:w-[75%] xl:w-[50%]">
            <button className="  h-20 w-20 cursor-pointer " onClick={prevPage}>
              <img src={backward} />
            </button>
            <div className="h-[90%] w-[100%] border-7 border-green-800 overflow-auto">
              <Document
                file={pdfInfo.pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </Document>
            </div>
            <button className=" h-20 w-20  cursor-pointer" onClick={nextPage}>
              <img src={forward} />
            </button>
          </div>
        </div>
      </body>
    </>
    /* 
<div className="flex items-center justify-center ">
            <div className="bg-green-400 h-100 w-300"></div>
        </div> */
  );
}
