import React from "react";
// import { useHistory } from "react-router-dom";
import "./TransList.scss";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";

const TransList = ({ data, toggle, onThumb }) => {
  // FaRegThumbsUp;
  // FaThumbsUp;
  console.log(data);
  const { currentUser, setCurrentUser } = useCurrentUser();

  const handleThumb = async (d) => {
    const response = await api.post("thumb/transcription", null, {
      params: {
        userIndex: currentUser.id, //좋아요누르는사람
        transcriptionId: d.id, //필사아이디
      },
    });
    onThumb();
  };
  const followFriend = async (d) => {
    const response = await api.post("friend/register", null, {
      params: {
        userId: currentUser.id, //나
        friendId: d.id, //내가 친구하고 싶은 사람
      },
    });

    alert(response.data.message);

    const newObject = {
      ...currentUser,
      friends: response.data.friendList,
    };
    setCurrentUser(newObject);
    // alert(response.data.message);
  };

  return (
    <div className="transList">
      {data ? (
        data.map((d) => (
          //   <TransCard data={d} onThumb={handleThumb} thumbJudge={d.thumbJudge} />
          // ))}

          <div className="transList__line">
            <div>필사:{d.content}</div>
            <div onClick={() => followFriend(d.user)}>
              유저닉네임:{d.user.nickName}
            </div>
            <div>북아이디:{d.book.title}</div>
            <button onClick={() => handleThumb(d)}>
              {d.thumbJudge ? <FaThumbsUp /> : <FaRegThumbsUp />}:{d.thumbCount}
            </button>
          </div>
        ))
      ) : (
        <>필사가 없습니다.</>
      )}

      <button onClick={toggle}>작성하러가기</button>
    </div>
  );
};

export default TransList;
