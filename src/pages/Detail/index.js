import BookRegister from "components/Card/BookRegister";
import React, { useState, useEffect } from "react";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import TransList from "components/List/TransList";
import qs from "qs";
import TransRegister from "../../components/Card/TransRegister";
import ReviewList from "components/List/ReviewList";

const Detail = ({ match, location }) => {
  // console.log("Match");
  // console.dir(match);
  // console.log("Location");
  // console.dir(location);
  // const query = qs.parse(location.search, {
  //   iignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략
  // });
  // console.log(query);
  const { params } = match; //url params
  const { currentUser } = useCurrentUser();
  const [otherTrans, setOtherTrans] = useState([]);
  const [otherReview, setOtherReview] = useState([]);
  // const { currentBook } = useCurrentBook();
  const [isRegister, setIsRegister] = useState(location.state.isRegister); //작성페이지인지 아닌지
  // console.log("isregister");
  // console.log(isRegister);
  const isTranscription = location.state.isTranscription;

  // console.log("type");
  // console.log(isTranscription);
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
    // console.log(response);
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
      console.log("preReview");
      console.log(otherReview);
      // setIsRegister(false);
    }
  };
  useEffect(() => {
    console.log("디테일페이지 새로 옴");

    handleTransExist();
    handleReviewExist();
    return () => {};
  }, []);
  const handleComment = () => {
    console.log("댓글다루기");
  };
  // console.log(otherTrans);
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
