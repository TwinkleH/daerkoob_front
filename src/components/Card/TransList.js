import React from "react";
import { useHistory } from "react-router-dom";
import "./TransList.scss";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
const TransList = ({ data, toggle, onThumb }) => {
  const { currentUser } = useCurrentUser();
  const history = useHistory();

  const handleThumb = async (d) => {
    const response = await api.post("thumb/transcription", null, {
      params: {
        userIndex: d.userId, //필사쓴사람
        userId: currentUser.id, //좋아요누르는사람
        bookId: d.bookId, //책아이디
        transcriptionId: d.id, //필사아이디
      },
    });
    console.log(response);
    onThumb();
  };
  return (
    <div className="transList">
      {data.map((d) => (
        <div className="transList__line">
          <div>필사:{d.transcription}</div>
          <div>유저아이디:{d.userId}</div>
          <div>북아이디:{d.bookId}</div>
          <button onClick={() => handleThumb(d)}>좋아요:{d.thumb}</button>
        </div>
      ))}
      <button onClick={toggle}>작성하러가기</button>
    </div>
  );
};

export default TransList;
