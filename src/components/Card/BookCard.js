import React from "react";
import { useHistory } from "react-router-dom";
const BookCard = ({ image, title }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/mypage");
  };

  return (
    <div className="bookCard" onClick={handleClick}>
      <img src={image} alt="" />
      {title}
    </div>
  );
};

export default BookCard;
