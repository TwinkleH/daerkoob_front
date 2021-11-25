import React from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
const ReviewList = ({ data, toggle, onThumb, onComment }) => {
  const { currentUser } = useCurrentUser();
  const followFriend = async () => {
    const response = await api.post("friend/add", null, {
      params: {
        userId: currentUser.id, //나
        friendId: data.user.id, //내가 친구하고 싶은 사람
      },
    });
    alert(response.data.message);
  };
  const handleThumb = async (d) => {
    const response = await api.post("thumb/review", null, {
      params: {
        userIndex: currentUser.id, //좋아요누르는사람
        reviewId: d.id, //리뷰아이디
      },
    });
    console.log("response");
    console.log(response);
    onThumb();
  };
  return (
    <div className="review">
      {data.map((d) => (
        // <TransCard data={d} onThumb={handleThumb} thumbJudge={d.thumbJudge} />
        <div className="review">
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

export default ReviewList;
