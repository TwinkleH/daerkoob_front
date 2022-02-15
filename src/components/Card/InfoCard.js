import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
import TransList from "components/List/TransList";
import ReviewList from "components/List/ReviewList";
const InfoCard = ({ person, id }) => {
  const history = useHistory();
  const { currentUser } = useCurrentUser();
  const [MyTransList, setMyTransList] = useState([]);
  const [MyReviewList, setMyReviewList] = useState([]);
  //이렇게 useEffect쓰는게 아닌가?
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const responseTrans = await api.get(`user/transcription/${id}`);
    setMyTransList([...responseTrans.data]);
    const responseReview = await api.get(`user/review/${id}`);
    setMyReviewList([...responseReview.data]);
  };
  const gotoFriendPage = (friendId) => {
    history.push({
      pathname: `/friendPage/${friendId}`,
    });
  };
  const gotoMypage = () => {
    history.push(`/mypage`);
  };
  return (
    <div>
      <div className="mypage__top">
        <span className="mypage__top__line" />
        <div className="mypage__top__profile">
          <div className="mypage__top__profile__img" />
          <div className="mypage__top__profile__nickname">
            {currentUser.nickName}
          </div>
        </div>
        <div className="mypage__top__btn">
          <button>
            <p>{MyTransList.length}</p> <p>리뷰</p>
          </button>
          <button>
            <p>{MyReviewList.length}</p>
            <p>필사</p>
          </button>
          <button>
            <p>{currentUser.friends.length}</p>
            <p>친구</p>
          </button>
        </div>
      </div>
      {/* {person && (
        <>
          <h1> {currentUser.nickName}의친구목록</h1>
          {currentUser.friends.map((d) => (
            <div onClick={() => gotoFriendPage(d.friendIndex)}>
              {d.friendNickName}
            </div>
          ))}
        </>
      )}

      {MyTransList.length !== 0 ? (
        <>
          <div>필사목록</div>
          <TransList data={MyTransList} from="mypage" />
        </>
      ) : (
        <div>필사가 없습니다</div>
      )}

      {MyReviewList.length !== 0 ? (
        <>
          <div>리뷰목록</div>
          <ReviewList data={MyReviewList} from="mypage" />
        </>
      ) : (
        <div>리뷰가 없습니다.</div>
      )}
      <div>잔디달력</div>
      {id !== currentUser.id && (
        <button onClick={gotoMypage}> 마이페이지 가기</button>
      )} */}
    </div>
  );
};

export default InfoCard;
