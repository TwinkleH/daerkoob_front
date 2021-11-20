import React from "react";
import { useHistory } from "react-router-dom";
import "./TransList.scss";
const TransList = ({ data, toggle }) => {
  const history = useHistory();

  return (
    <div className="transList">
      {data.map((d) => (
        <div className="transList__line">
          <div>필사:{d.transcription}</div>
          <div>유저아이디:{d.userId}</div>
          <div>북아이디:{d.bookId}</div>
          <div>좋아요:{d.thumb}</div>
          <div>별점:{d.star}</div>
        </div>
      ))}
      <button onClick={toggle}>작성하러가기</button>
    </div>
  );
};

export default TransList;
