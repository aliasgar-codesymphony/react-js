import React, { useEffect, useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfReader(props: any) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {}, [pageNumber, props.pdfUrl]);

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
    <div className="flex justify-center items-center gap-4">
      <button
        className="bg-gray-400 h-15 w-30 cursor-pointer "
        onClick={prevPage}
      >
        Prev
      </button>
      <div className="h-190 w-155 border-2 border-gray-200 overflow-hidden">
        <Document file={props.pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <button
        className="bg-gray-400 h-15 w-30  cursor-pointer"
        onClick={nextPage}
      >
        Next
      </button>

      <p>
        {pageNumber}/{numPages}
      </p>
    </div>

    /* 
<div className="flex items-center justify-center ">
            <div className="bg-green-400 h-100 w-300"></div>
        </div> */
  );
}
