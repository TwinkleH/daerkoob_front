import React, { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp, FaCaretRight } from "react-icons/fa";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
const ReviewCommnetModal = ({ data, onChange }) => {
  const { currentUser } = useCurrentUser();
  console.log(data);
  const d = data;
  const [commentsOpen, setCommentsOpen] = useState(false);
  const handleCommentsOpen = () => {
    setCommentsOpen(!commentsOpen);
  };
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async () => {
    const response = await api.post("comment/register/nested", null, {
      params: {
        userId: currentUser.id,
        commentId: d.id,
        content: comment,
      },
    });
    setComment("");
    console.log(response);
  };
  return (
    <div className="re-comment">
      <FaCaretRight onClick={handleCommentsOpen} />
      {d.content}
      {d.writer.nickName}
      <button onClick={() => {}}>
        <FaThumbsUp />:{d.thumbCount}
      </button>
      {commentsOpen && d.comments && (
        <>
          {d.comments.map((c) => (
            <div> &#45; {c.content}</div>
          ))}
          <div>
            <input type="text" value={comment} onChange={handleChange}></input>
            <button onClick={handleSubmit}>댓글달기</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewCommnetModal;
