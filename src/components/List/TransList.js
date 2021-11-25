import React from "react";
import { useHistory } from "react-router-dom";
import "./TransList.scss";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
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
        userIndex: currentUser.id, //좋아요누르는사람
        transcriptionId: d.id, //필사아이디
      },
    });
    console.log("response");
    console.log(response);
    onThumb();
  };
  const followFriend = async () => {
    const response = await api.post("friend/add", null, {
      params: {
        userId: currentUser.id, //나
        friendId: data.user.id, //내가 친구하고 싶은 사람
      },
    });
    alert(response.data.message);
  };

  return (
    <div className="transList">
      {data.map((d) => (
        // <TransCard data={d} onThumb={handleThumb} thumbJudge={d.thumbJudge} />
        <div className="transList__line">
          <div>필사:{d.content}</div>
          <div onClick={followFriend}>유저닉네임:{currentUser.nickName}</div>
          <div>북아이디:{d.book.id}</div>
          <button onClick={() => handleThumb(d)}>
            {d.thumbJudge ? <FaThumbsUp /> : <FaRegThumbsUp />}:{d.thumbCount}
          </button>
        </div>
      ))}
      <button onClick={toggle}>작성하러가기</button>
    </div>
  );
};

export default TransList;
