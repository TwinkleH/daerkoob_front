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
  // const [data, setData] = useState([]);
  // const [transPage, setTransPage] = useState(1);
  // const [loading, setLoading] = useState(false); //trans
  const [ref, inView] = useInView(); //trans
  // console.log(ref);
  const { currentUser, setCurrentUser } = useCurrentUser();
  // const [totalTransPage, setTotalTransPage] = useState(0);
  // const handleTransExist = useCallback(async () => {
  //   setLoading(true);
  //   const response = await api.get(
  //     `transcription/inquiry/${currentUser.id}/${isbn}/${transPage}`
  //   );
  //   //검색
  //   setTotalTransPage(response.data.totalSize);
  //   console.log(response);
  //   let preData = [];
  //   if (response.data.totalSize > 0) {
  //     response.data.list.forEach((item) => {
  //       preData.push(item);
  //     });
  //     setData([...data, ...preData]);
  //     console.log(data);
  //   }
  //   setLoading(false);
  // }, [transPage]);

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

    alert(response.data.message.message);
    console.log(response);
    const newObject = {
      ...currentUser,
      friends: response.data.list,
    };
    console.log(newObject);
    setCurrentUser(newObject);
  };

  // useEffect(() => {
  //   // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
  //   if (inView && !loading) {
  //     setTransPage(transPage + 1);
  //   }
  // }, [inView, loading]);
  // useEffect(() => {
  //   handleTransExist();
  // }, [handleTransExist]);

  console.log(inView, "inview");
  useEffect(() => {
    setInView(inView);
  }, [inView]);

  return (
    <div className="transList">
      {/* <div className="transList__title">{title}</div> */}
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

                <button onClick={() => handleThumb(d)}>
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
