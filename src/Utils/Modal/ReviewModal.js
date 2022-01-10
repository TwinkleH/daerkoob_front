import React, { useState, useEffect } from "react";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import "./ReviewModal.scss";

import ReviewCommnetModal from "./ReviewCommnetModal";
const ReviewModal = ({ data, isOpen, close }) => {
  console.log(data);
  const { currentUser } = useCurrentUser();
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState([]);
  const handleChange = (e) => {
    setComment(e.target.value);
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
  };
  useEffect(() => {
    const getReview = async () => {
      const response = await api.get(
        `comment/inquiry/${data.id}/${currentUser.id}`
      );
      setAllComment(response.data);
    };
    console.log(allComment);
    getReview();
  }, [comment]);

  return (
    <div className="modal">
      <button onClick={close} className="closeBtn">
        x
      </button>
      {data.book.title}
      {allComment.map((d) => (
        <ReviewCommnetModal data={d} />
      ))}
      <input type="text" value={comment} onChange={handleChange}></input>
      <button onClick={handleSubmit}>댓글달기</button>
    </div>
  );
};

export default ReviewModal;
