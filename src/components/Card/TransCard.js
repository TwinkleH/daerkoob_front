import React, { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
const TransCard = ({ data, onThumb }) => {
  const [thumbUp, setThumbUp] = useState(false);
  const user = data.user;
  const book = data.book;
  console.log(data);
  return (
    <div>
      <div className="transList__line">
        {/* <div>필사:{d.transcription}</div> */}
        <div>유저아이디:{user.userId}</div>
        <div>북아이디:{book.id}</div>
        <button
          onClick={() => {
            // onThumb(d);
            setThumbUp(!thumbUp);
          }}
        >
          {/* {thumbUp ? <FaThumbsUp /> : <FaRegThumbsUp />}:{d.thumb} */}
        </button>
      </div>
    </div>
  );
};

export default TransCard;
