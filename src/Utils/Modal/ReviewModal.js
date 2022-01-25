import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import "./ReviewModal.scss";

import ReviewCommnetModal from "./ReviewCommnetModal";
import CommentInputCard from "components/Card/CommentInputCard";
const ReviewModal = ({ data, isOpen, close }) => {
  console.log(data);
  const { currentUser } = useCurrentUser();
  const [comment, setComment] = useState("");
  // const [nestedComment, setNestedComment] = useState("");
  const [commentAdd, setCommentAdd] = useState("");
  const [allComment, setAllComment] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleNestedComment = () => {
    setCommentAdd(true);
  };
  const handleSubmit = async () => {
    const response = await api.post("comment/register/review", null, {
      params: {
        userId: currentUser.id,
        reviewId: data.id,
        content: comment,
      },
    });
    setComment("");
    console.log(response);
    alert(response.data.message);
  };
  useEffect(() => {
    const getReview = async () => {
      const response = await api.get(
        `comment/inquiry/${data.id}/${currentUser.id}`
      );
      setAllComment(response.data.list);
      setCommentCount(response.data.totalSize);
    };
    console.log(allComment);
    getReview();
  }, [comment, commentAdd]);
  console.log(allComment);
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
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
          backgroundColor: "gray",
        },
      }}
    >
      <div className="modal">
        <button onClick={close} className="closeBtn">
          댓글 닫기 X
        </button>
        {data.book.title}
        <h2>전체 댓글 개수:{commentCount}</h2>
        <CommentInputCard
          comment={comment}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {allComment.map((d) => (
          <ReviewCommnetModal
            data={d}
            setCommentAdd={setCommentAdd}
            // commentAdd={commentAdd}
            // nestedComment={nestedComment}
            // setNestedComment={setNestedComment}
          />
        ))}
      </div>
    </ReactModal>
  );
};

export default ReviewModal;
