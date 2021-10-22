import React from "react";
import "pages/Home/index.scss";
import HomeCard from "components/Card/HomeCard";
const Home = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__banner">배너</div>
      <div className="wrapper__container">
        <HomeCard name="전체 리뷰수" />
        <HomeCard name="전체 필사수" />
        <HomeCard name="리뷰된 책 수" />
      </div>
    </div>
  );
};

export default Home;
