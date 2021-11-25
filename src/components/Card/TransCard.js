import React, { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
const TransCard = ({ data, onThumb, thumbJudge }) => {
  const [thumbUp, setThumbUp] = useState(false);
  const user = data.user;
  const book = data.book;
  const { currentUser, setCurrentUser } = useCurrentUser();
  console.log(thumbJudge);
  const followFriend = async () => {
    const response = await api.post("friend/add", null, {
      params: {
        userId: currentUser.id,
        friendId: user.id,
      },
    });
    alert(response.data.message);
  };

  return (
    <div>
      <div className="transList__line">
        <div>필사:{data.content}</div>
        <div onClick={followFriend}>유저닉네임:{user.nickName}</div>
        <div>북아이디:{book.id}</div>
        <button
          onClick={() => {
            onThumb(data);
            setThumbUp(!thumbUp);
          }}
        >
          {thumbJudge ? <FaThumbsUp /> : <FaRegThumbsUp />}:{data.thumbCount}
        </button>
      </div>
    </div>
  );
};

export default TransCard;
