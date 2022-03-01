import BookRegister from "components/Card/BookRegister";
import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import TransList from "components/List/TransList";
// import qs from "qs";
import TransRegister from "../../components/Card/TransRegister";
import ReviewList from "components/List/ReviewList";
import "./index.scss";
import Pagination from "components/Card/Pagination";
const Detail = ({ match, location }) => {
  // const query = qs.parse(location.search, {
  //   iignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략
  // });
  // console.log(query);
  const { params } = match; //url params
  console.log(params);
  const { currentUser } = useCurrentUser();
  const [otherTrans, setOtherTrans] = useState([]);
  const [otherReview, setOtherReview] = useState([]);
  const [reviewPage, setReviewPage] = useState(1);
  const [totalReviewPage, setTotalReviewPage] = useState(0);
  const [totalTransPage, setTotalTransPage] = useState(0);
  const [transPage, setTransPage] = useState(1);
  const [loading, setLoading] = useState(false); //trans

  const [inView, setInView] = useState(false);
  // const { currentBook } = useCurrentBook();
  // const [isRegister, setIsRegister] = useState(location.state.isRegister); //작성페이지인지 아닌지
  const isTranscription = location.state.isTranscription;
  // const handleToggle = () => {
  //   //작성페이지 vs 필사리스트
  //   setIsRegister(!isRegister);
  // };
  const [openRegister, setOpenRegister] = useState(false);
  const handleThumb = () => {
    //좋아요누르면
    handleTransExist();
    setTransPage(totalTransPage / 5 + 1);
    handleReviewExist();
  };

  const handleTransExist = useCallback(async () => {
    setLoading(true);
    const response = await api.get(
      `transcription/inquiry/${currentUser.id}/${params.isbn}/${transPage}`
    );
    //검색
    console.log(response);
    let preData = [];
    if (response.data.totalSize > 0) {
      response.data.list.forEach((item) => {
        preData.push(item);
      });
      setOtherTrans([...otherTrans, ...preData]);
      console.log(otherTrans);
    }
    setTotalTransPage(response.data.totalSize);
    setLoading(false);
  }, [transPage]);

  const handleReviewExist = useCallback(async () => {
    const response = await api.get(
      `review/inquiry/${currentUser.id}/${params.isbn}/${reviewPage}`
    );
    setTotalReviewPage(response.data.totalSize);
    console.log("토탈사이즈", response.data);
    let preData = [];
    if (response.data.totalSize > 0) {
      response.data.list.forEach((item) => {
        preData.push(item);
      });
      setOtherReview(preData);
    }
  }, [reviewPage]);
  useEffect(() => {
    console.log("디테일페이지 새로 옴");
    //isTransition일때 로그인 안되어있으면 로그인하러가기...

    //다른사람 코멘트 보러가는거면 현재 있는지 아닌지 확인한다.
    handleTransExist();
    handleReviewExist();
  }, [handleTransExist, handleReviewExist]);
  const handleComment = () => {
    console.log("댓글다루기");
  };
  const handlePageChange = (num) => {
    console.log("detail", num);
    setReviewPage(num);
  };
  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setTransPage(transPage + 1);
    }
  }, [inView, loading]);
  console.log(inView, loading);
  return (
    <div className="detail">
      <div className="detail__title">
        <div>{location.state.title}</div>
      </div>

      {isTranscription ? ( //필사작성
        <div className="detail__trans">
          <TransList
            data={otherTrans}
            onThumb={handleThumb}
            title={location.state.title}
            setInView={setInView}
            totalTransPage={totalTransPage}
          />
          <TransRegister isbn={params.isbn} />
        </div>
      ) : (
        //리뷰작성
        <>
          <button onClick={() => setOpenRegister(!openRegister)}>
            {openRegister ? <>리뷰보러가기</> : <>리뷰작성하러가기</>}
          </button>
          {openRegister ? (
            <BookRegister
              isbn={params.isbn}
              onClick={() => {
                setOpenRegister(false);
              }}
            />
          ) : (
            <>
              <ReviewList
                data={otherReview}
                onThumb={handleThumb}
                onComment={handleComment}
              />
              <Pagination
                setNumber={handlePageChange}
                total={totalReviewPage}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Detail;
