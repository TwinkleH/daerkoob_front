import BookRegister from "components/Card/BookRegister";
import React, { useState, useEffect } from "react";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import TransList from "components/List/TransList";
// import qs from "qs";
import TransRegister from "../../components/Card/TransRegister";
import ReviewList from "components/List/ReviewList";
import { useHistory } from "react-router";
const Detail = ({ match, location }) => {
  // const query = qs.parse(location.search, {
  //   iignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략
  // });
  // console.log(query);
  const history = useHistory();
  const { params } = match; //url params
  const { currentUser } = useCurrentUser();
  const [otherTrans, setOtherTrans] = useState([]);
  const [otherReview, setOtherReview] = useState([]);
  // const { currentBook } = useCurrentBook();
  const [isRegister, setIsRegister] = useState(location.state.isRegister); //작성페이지인지 아닌지
  const isTranscription = location.state.isTranscription;
  const handleToggle = () => {
    //작성페이지 vs 필사리스트
    setIsRegister(!isRegister);
  };
  const handleThumb = () => {
    //좋아요누르면
    handleTransExist();
    handleReviewExist();
  };

  const handleTransExist = async () => {
    const response = await api.get(
      `transcription/inquiry/${currentUser.id}/${params.isbn}`
    );
    //검색
    let preData = [];
    if (response.data.length > 0) {
      response.data.forEach((item) => {
        preData.push(item);
      });
      setOtherTrans(preData);
    }
  };
  const handleReviewExist = async () => {
    const response = await api.get(
      `review/inquiry/${currentUser.id}/${params.isbn}`
    );
    let preData = [];
    if (response.data.length > 0) {
      response.data.forEach((item) => {
        preData.push(item);
      });
      setOtherReview(preData);
    }
  };
  useEffect(() => {
    console.log("디테일페이지 새로 옴");
    //isTransition일때 로그인 안되어있으면 로그인하러가기...
    handleTransExist();
    handleReviewExist();

    return () => {};
  }, []);
  const handleComment = () => {
    console.log("댓글다루기");
  };

  return (
    <div>
      {isRegister ? (
        <>
          {isTranscription ? (
            <TransRegister toggle={handleToggle} isbn={params.isbn}>
              리뷰쓰기
            </TransRegister>
          ) : (
            <BookRegister toggle={handleToggle} isbn={params.isbn} />
          )}
        </>
      ) : (
        <>
          {isTranscription ? (
            <TransList
              data={otherTrans}
              toggle={handleToggle}
              onThumb={handleThumb}
            />
          ) : (
            <ReviewList
              data={otherReview}
              toggle={handleToggle}
              onThumb={handleThumb}
              onComment={handleComment}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Detail;
