import React from "react";
import "pages/Home/index.scss";
import HomeCard from "components/Card/HomeCard";
import BookCard from "components/Card/BookCard";
import _data from "book.json";
const Home = () => {
  const mockData = _data.concat();
  // const img_link =  "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  return (
    <div className="wrapper">
      <div className="wrapper__banner">배너</div>
      <div className="wrapper__container">
        <HomeCard name="전체 리뷰수" />
        <HomeCard name="전체 필사수" />
        <HomeCard name="리뷰된 책 수" />
      </div>
      <div className="wrapper__container">
        {mockData.slice(0, 5).map((d) => (
          <BookCard title={d.title} image={d.image} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Home;
