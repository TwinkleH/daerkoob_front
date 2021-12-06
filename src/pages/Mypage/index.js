import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useCurrentUser from "Hooks/useCurrentUser";
import "pages/Mypage/index.scss";
import TransList from "components/List/TransList";
import ReviewList from "components/List/ReviewList";
// import Slider from "react-slick"; //좌우로 이동
import "slick-carousel/slick/slick-theme.css";

const Mypage = () => {
  const { currentUser } = useCurrentUser();

  const history = useHistory();

  //이렇게 useEffect쓰는게 아닌가?
  // useEffect(() => {
  //   if (currentUser)
  //     history.push({
  //       pathname: "/auth",
  //     });
  // }, [currentUser]);

  return (
    <div className="mypage">
      <h1>mypage</h1>
      <h1> {currentUser.nickName}의친구목록</h1>
      {currentUser.friends.map((d) => (
        <div>{d.friendNickName}</div>
      ))}
      <div>내가 쓴 필사/리뷰 목록</div>
      <TransList />
      <ReviewList />
      <div>잔디달력</div>
    </div>
  );
};

export default Mypage;
