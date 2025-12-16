import React from "react";

export default function VideoCard({ openModal, imageUrl }: any) {
  return (
    <div>
      <div className="ml-5 inline-flex items-center gap-4 ">
        <img
          src={imageUrl}
          className="w-90 h-50 cursor-pointer rounded-md"
         onClick={openModal}
        />
      </div>
    </div>
  );
}
