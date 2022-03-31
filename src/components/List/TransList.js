import React, { useState, useEffect } from "react";
import "./TransList.scss";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import { useInView } from "react-intersection-observer";
const TransList = ({
  data,
  onThumb,
  title,
  from,
  setInView,
  totalTransPage,
}) => {
  const [ref, inView] = useInView(); //trans
  const { currentUser, setCurrentUser } = useCurrentUser();

  const handleThumb = async (d) => {
    await api.post("thumb/transcription", null, {
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

    alert(response.data.message.message);
    const newObject = {
      ...currentUser,
      friends: response.data.list,
    };
    setCurrentUser(newObject);
  };

  useEffect(() => {
    setInView(inView);
  }, [inView]);

  return (
    <div className="transList">
      {data ? (
        data.map((d, index) => (
          <React.Fragment key={index}>
            {(data.length - 1 === index) & (index !== totalTransPage - 1) ? (
              <div className="transList__box wow" ref={ref}>
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

                <button
                  onClick={() => handleThumb(d)}
                  style={{ cursor: "pointer" }}
                >
                  {from ? (
                    <span>좋아요개수</span>
                  ) : (
                    <>{d.thumbJudge ? <FaThumbsUp /> : <FaRegThumbsUp />}</>
                  )}
                  :{d.thumbCount}
                </button>
              </div>
            ) : (
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
                  {from ? (
                    <span>좋아요개수</span>
                  ) : (
                    <>{d.thumbJudge ? <FaThumbsUp /> : <FaRegThumbsUp />}</>
                  )}
                  :{d.thumbCount}
                </button>
              </div>
            )}
          </React.Fragment>
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
