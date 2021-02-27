/** @format */

import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={` modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
      <div className='modal-container'>
        <h3>modal container</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
