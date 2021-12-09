import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useCurrentUser from "Hooks/useCurrentUser";
import "pages/Mypage/index.scss";
import TransList from "components/List/TransList";
import ReviewList from "components/List/ReviewList";
// import Slider from "react-slick"; //좌우로 이동
import "slick-carousel/slick/slick-theme.css";
import api from "api/api";
const Mypage = () => {
  console.log();
  const history = useHistory();

  const { currentUser } = useCurrentUser();

  const [MyTransList, setMyTransList] = useState([]);
  const [MyReviewList, setMyReviewList] = useState([]);
  //이렇게 useEffect쓰는게 아닌가?
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const responseTrans = await api.get(`user/transcription/${currentUser.id}`);
    setMyTransList([...responseTrans.data]);
    const responseReview = await api.get(`user/review/${currentUser.id}`);

    setMyReviewList([...responseReview.data]);
  };
  const gotoFriendPage = (friendId) => {
    history.push({
      pathname: `/friendPage`,
      state: {
        jiyeong: " ji",
      },
    });
  };
  return (
    <div className="mypage">
      <h1>mypage</h1>
      <h1> {currentUser.nickName}의친구목록</h1>
      {currentUser.friends.map((d) => (
        <div onClick={() => gotoFriendPage(d.friendIndex)}>
          {d.friendNickName}
        </div>
      ))}
      {MyTransList.length !== 0 ? (
        <>
          <div>내가 쓴 필사목록</div>
          <TransList data={MyTransList} />
        </>
      ) : (
        <div>필사가 없습니다</div>
      )}

      {MyReviewList.length !== 0 ? (
        <>
          <div>내가 쓴 리뷰목록</div>
          <ReviewList data={MyReviewList} />
        </>
      ) : (
        <div>리뷰가 없습니다.</div>
      )}
      <div>잔디달력</div>
    </div>
  );
};

export default Mypage;
