import React from "react";

const CommentInputCard = ({ comment, handleChange, handleSubmit }) => {
  return (
    <div className="addComment">
      <input
        required
        className="addComment__input"
        type="text"
        value={comment}
        onChange={handleChange}
        placeholder="댓글추가"
      ></input>
      <button onClick={handleSubmit} className="addComment__submit">
        저장
      </button>
      <span className="addComment__line" />
    </div>
  );
};

export default CommentInputCard;
