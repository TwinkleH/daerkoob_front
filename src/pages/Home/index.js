import React, { useState, useEffect } from "react";
import "pages/Home/index.scss";
import HomeCard from "components/Card/HomeCard";
import BookCard from "components/Card/BookCard";
// import _data from "book.json";
import api from "api/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  // const mockData = _data.concat();
  const [totalTrans, setTotalTrans] = useState(0); //전체 필사수
  const [totalReview, setTotalReview] = useState(0); //전체 리뷰수
  const [totalBook, setTotalBook] = useState(0); //등록된 책 수
  const [bestBook, setBestBook] = useState(); //베스트책
  // const img_link =  "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  const TransCount = async () => {
    const response = await api.get("transcription/count");
    setTotalTrans(response.data);
    // setTotalTrans
  };
  const ReviewCount = async () => {
    const response = await api.get("review/count");
    setTotalReview(response.data);
  };
  const BookCount = async () => {
    const response = await api.get("book/count");
    setTotalBook(response.data);
  };
  const BookBest = async () => {
    const response = await api.get("book/best");
    setBestBook(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    TransCount();
    ReviewCount();
    BookCount();
    BookBest();
    return () => {
      // cleanup;
    };
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  if (!bestBook) return <div>...loading</div>;

  return (
    <div className="wrapper">
      <div className="wrapper__banner">배너</div>
      <div className="wrapper__container">
        <HomeCard name="전체 리뷰수" data={totalReview} />
        <HomeCard name="전체 필사수" data={totalTrans} />
        <HomeCard name="등록된 책 수" data={totalBook} />
      </div>
      <div className="wrapper__container">
        <Slider {...settings}>
          {bestBook.map((d) => (
            <BookCard title={d.title} image={d.image} data={d} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
