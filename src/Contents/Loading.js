import React from "react";
import "./Loading.scss";
const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container">
        <div className="loading__container__loader">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
