import React from "react";
import "./TransList.scss";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";

const TransList = ({ data, onThumb, title, from }) => {
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
    console.log(response);
    const newObject = {
      ...currentUser,
      friends: response.data.list,
    };
    console.log(newObject);
    setCurrentUser(newObject);
  };
  // const bookTitle =

  return (
    <div className="transList">
      {/* <div className="transList__title">{title}</div> */}
      {data ? (
        data.map((d) => (
          <div className="transList__box">
            {from ? (
              <div className="transList__box__title">{d.book.title}</div>
            ) : (
              <div
                onClick={() => followFriend(d.user)}
                className="transList__box__title"
              >
                {d.user.nickName}
              </div>
            )}

            <hr />
            <div>{d.content}</div>

            <button onClick={() => handleThumb(d)}>
              {d.thumbJudge ? <FaThumbsUp /> : <FaRegThumbsUp />}:{d.thumbCount}
            </button>
          </div>
        ))
      ) : (
        <>필사가 없습니다.</>
      )}

      {/* {currentUser.id !== 0 && toggle && (
        <button onClick={toggle}>작성하러가기</button>
      )} */}
    </div>
  );
};

export default TransList;
