import React from "react";
import Modal from "react-modal";
import ReviewList from "components/List/ReviewList";
const MypageReviewModal = ({ isOpen, onClose, data }) => {
  const customStyles = {
    overlay: {
      background: "rgba(127, 127, 127, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
      borderRadius: "20px",
    },
  };
  console.log(data);
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <button onClick={onClose}>닫기</button>
      {/* {data.map((d) => (
        <div>
          <span>{d.friendNickName}</span>
          <span>{d.friendIndex}</span>
        </div>
      ))} */}
      <ReviewList data={data} from="mypage" />
    </Modal>
  );
};

export default MypageReviewModal;
