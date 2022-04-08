import React, { useEffect } from "react";
import Modal from "react-modal";
const CustomModal = ({ isOpen, onClose }) => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    content: {
      width: "100%",
      height: "70vh",
      position: "absolute",
      top: "50%",
      left: " 50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #eee",
      borderRadius: "15px",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      outline: "none",
      padding: "20px",
      textAlign: "center",
      // backgroundColor: "gray",
    },
  };
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = `position: ""; top: "";`;
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   };
  // }, []);
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <button onClick={onClose}>닫기</button>
    </Modal>
  );
};

export default CustomModal;
