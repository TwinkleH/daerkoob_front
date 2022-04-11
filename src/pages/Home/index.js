import React, { useState, useEffect } from "react";
import "pages/Home/index.scss";
import HomeCard from "components/Card/HomeCard";
import BookCard from "components/Card/BookCard";
// import _data from "book.json";
import api from "api/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewList from "components/List/NewList";
import Loading from "Contents/Loading";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Home = () => {
  // const mockData = _data.concat();
  const [totalTrans, setTotalTrans] = useState(0); //전체 필사수
  const [totalReview, setTotalReview] = useState(0); //전체 리뷰수
  const [totalBook, setTotalBook] = useState(0); //등록된 책 수
  const [bestBook, setBestBook] = useState(); //베스트책
  const [newTrans, setNewTrans] = useState();
  const [newReview, setNewReview] = useState();
  // const img_link =  "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  const TransCount = async () => {
    const response = await api.get("transcription/count");
    setTotalTrans(response.data);
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
  };
  const NewTrans = async () => {
    const response = await api.get("transcription/recent");
    setNewTrans(response.data);
  };
  const NewReview = async () => {
    const response = await api.get("review/recent");
    setNewReview(response.data);
  };
  useEffect(() => {
    TransCount();
    ReviewCount();
    BookCount();
    BookBest();
    NewTrans();
    NewReview();
    return () => {
      // cleanup;
    };
  }, []);
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "black" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "black" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    // autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <FaAngleLeft size="20px" fill="black" />,
    nextArrow: <FaAngleRight size="20px" fill="black" />,
  };

  if (!newTrans) return <Loading />;
  if (!newReview) return <Loading />;
  return (
    <div className="home">
      <div className="home__banner">
        <img src= 'banner_1.jpg'/> 
      </div>

      <div className="home__container">
        <HomeCard name="전체 리뷰수" data={totalReview} />
        <HomeCard name="전체 필사수" data={totalTrans} />
        <HomeCard name="등록된 책 수" data={totalBook} />
      </div>
      <div className="home__container">
        <div className="home__container__slider">
          <Slider {...settings}>
            {bestBook.map((d) => (
              <BookCard title={d.title} image={d.image} data={d} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="home__newList">
        <h1>새로운필사</h1>
        <h1>새로운리뷰</h1>
        <div className="home__newList__line">
          {newTrans.map((d) => (
            <NewList data={d} />
          ))}
        </div>

        <div className="home__newList__line">
          {newReview.map((d) => (
            <NewList data={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
