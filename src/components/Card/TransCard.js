import React, { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
const TransCard = ({ data, onThumb }) => {
  const [thumbUp, setThumbUp] = useState(false);
  const d = data;
  return (
    <div>
      <div className="transList__line">
        <div>필사:{d.transcription}</div>
        <div>유저아이디:{d.userId}</div>
        <div>북아이디:{d.bookId}</div>
        <button
          onClick={() => {
            onThumb(d);
            setThumbUp(!thumbUp);
          }}
        >
          {thumbUp ? <FaThumbsUp /> : <FaRegThumbsUp />}:{d.thumb}
        </button>
      </div>
    </div>
  );
};

export default TransCard;
