import React from "react";
import { useHistory, Link } from "react-router-dom";
import "components/Card/BookCard.scss";
//import BookDetail from "components/Card/BookDetail";
//import useContents from "Hooks/useContents";
// import { currentContent } from 'Store';
import useCurrentBook from "Hooks/useCurrentBook";
const BookCard = ({ data }) => {
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";

  const { title, image } = data;

  const { currentBook, setCurrentBook } = useCurrentBook();

  const history = useHistory();
  const handleClick = () => {
    setCurrentBook(data);
    console.log(currentBook);
  };

  return (
    <div className="bookCard" onClick={handleClick}>
      {/* <Link to="/bookDetail"> */}
      <img src={image ? image : img_link} alt="" className="bookCard__img" />
      {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
      {/* </Link> */}
    </div>
  );
};

export default BookCard;
