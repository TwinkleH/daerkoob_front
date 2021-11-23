import React from "react";
import { useHistory } from "react-router-dom";
import "./TransList.scss";
import { useState } from "react";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import TransCard from "components/Card/TransCard";

const TransList = ({ data, toggle, onThumb }) => {
  // FaRegThumbsUp;
  // FaThumbsUp;

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
    console.log(response.data);
    onThumb();
  };
  console.log(data);
  return (
    <div className="transList">
      {data.map((d) => (
        <TransCard data={d} onThumb={handleThumb} />
      ))}
      <button onClick={toggle}>작성하러가기</button>
    </div>
  );
};

export default TransList;
