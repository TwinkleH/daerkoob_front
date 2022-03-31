import React from "react";
import TransDetail from "./TransDetail";
import ReviewDetail from "./ReviewDetail";

const Detail = ({ match, location }) => {
  const { params } = match; //url params

  const isTranscription = location.state.isTranscription;

  return (
    <div className="detail">
      <div className="detail__title">
        <div>{location.state.title}</div>
      </div>

      {isTranscription ? (
        <TransDetail isbn={params.isbn} title={location.state.title} />
      ) : (
        <ReviewDetail isbn={params.isbn} register={location.state.isRegister} />
      )}
    </div>
  );
};

export default Detail;
