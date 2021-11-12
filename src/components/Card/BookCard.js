import React from "react";
import { useHistory } from "react-router-dom";
import "components/Card/BookCard.scss";
const BookCard = ({ image, title }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/mypage");
  };

  return (
    <div className="bookCard" onClick={handleClick}>
      <img src={image} alt="" className="bookCard__img" />
      {title}
    </div>
  );
};

export default BookCard;
