import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function VideoModal({ isOpen, onRequestClose }: any) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="FirstModal" className='h-100 w-100 bg-blue-500'>
      <p>This is testing</p>
      <p>This is testing</p>
      <p>This is testing</p>
      <p>This is testing</p>
      <button onClick={onRequestClose}>close</button>
    </Modal>
  );
}
