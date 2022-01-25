import React, { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp, FaCaretDown } from "react-icons/fa";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
import CommentInputCard from "components/Card/CommentInputCard";
const ReviewCommnetModal = ({ data, setCommentAdd }) => {
  const { currentUser } = useCurrentUser();
  const d = data;
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentRegister, setCommentRegister] = useState(false);
  const handleCommentsOpen = () => {
    setCommentsOpen(!commentsOpen);
  };
  const [nestedComment, setNestedComment] = useState("");
  const handleChange = (e) => {
    setNestedComment(e.target.value);
  };
  const handleSubmit = async () => {
    const response = await api.post("comment/register/nested", null, {
      params: {
        userId: currentUser.id,
        commentId: d.id,
        content: nestedComment,
      },
    });
    setCommentAdd(nestedComment);
    setNestedComment("");
    setCommentRegister(false);

    // handleNestedComment();
    console.log(response);
  };
  return (
    <div className="re-comment">
      <h4>{d.writer.nickName}</h4>
      {d.content}
      <div>
        <button onClick={() => {}}>
          <FaThumbsUp />:{d.thumbCount}
        </button>
        <button onClick={() => setCommentRegister(!commentRegister)}>
          답글
        </button>
      </div>
      {commentRegister && (
        <CommentInputCard
          comment={nestedComment}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      {d.nestedCount > 0 && (
        <div>
          <FaCaretDown onClick={handleCommentsOpen} />
          <span>답글 {d.nestedCount}개 보기</span>
        </div>
      )}

      {commentsOpen && d.comments && (
        <>
          {d.comments.map((c) => (
            <div> &#45; {c.content}</div>
          ))}
          <div></div>
        </>
      )}
    </div>
  );
};

export default ReviewCommnetModal;
