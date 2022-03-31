import React, { useEffect, useCallback, useState } from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
import ReviewList from "components/List/ReviewList";
import "./index.scss";
import Pagination from "components/Card/Pagination";
import BookRegister from "components/Card/BookRegister";

const ReviewDetail = ({ isbn, register }) => {
  const { currentUser } = useCurrentUser();
  const [otherReview, setOtherReview] = useState([]);
  const [reviewPage, setReviewPage] = useState(0);
  const [totalReviewPage, setTotalReviewPage] = useState(0);
  const [openRegister, setOpenRegister] = useState(register);
  const handleReviewExist = useCallback(async () => {
    const response = await api.get(
      `review/inquiry/${currentUser.id}/${isbn}/${reviewPage}`
    );
    setTotalReviewPage(response.data.totalSize);
    let preData = [];
    if (response.data.totalSize > 0) {
      response.data.list.forEach((item) => {
        preData.push(item);
      });
      setOtherReview(preData);
    }
  }, [reviewPage]);
  useEffect(() => {
    handleReviewExist();
  }, [handleReviewExist]);
  const handlePageChange = (num) => {
    setReviewPage(num);
  };
  const handleThumb = () => {
    handleReviewExist();
  };
  const handleComment = () => {};

  return (
    <>
      <button onClick={() => setOpenRegister(!openRegister)}>
        {openRegister ? <>리뷰보러가기</> : <>리뷰작성하러가기</>}
      </button>
      {openRegister ? (
        <BookRegister
          isbn={isbn}
          onClick={() => {
            setOpenRegister(false);
          }}
          setOpenRegister={setOpenRegister}
          update={handleReviewExist}
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
            page={reviewPage}
          />
        </>
      )}
    </>
  );
};

export default ReviewDetail;
