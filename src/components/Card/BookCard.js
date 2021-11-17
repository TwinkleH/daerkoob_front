import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "components/Card/BookCard.scss";
//import BookDetail from "components/Card/BookDetail";
//import useContents from "Hooks/useContents";
// import { currentContent } from 'Store';
import useCurrentBook from "Hooks/useCurrentBook";
import useCurrentUser from "Hooks/useCurrentUser";
const BookCard = ({ data }) => {
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  const { currentUser } = useCurrentUser();
  const { title, image } = data;

  const { currentBook, setCurrentBook } = useCurrentBook();

  const history = useHistory();

  const handleClick = async () => {
    await setCurrentBook(data);
    console.log(currentBook);
    // currentUser ? history.push("/bookregister") : history.push("/auth");
    history.push("/bookregister");
  };

  // useEffect(() => {
  //   return () => {
  //     history.push("/bookrecord");
  //   };
  // }, [currentBook]);
  //이렇게 해결하는게 맞나?
  //아니면 디비에서 불러와서 해야하는게 맞나?
  //이것도 localstorage에 넣어야하나?

  return (
    <div className="bookCard" onClick={handleClick}>
      <img src={image ? image : img_link} alt="" className="bookCard__img" />
      {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
    </div>
  );
};

export default BookCard;
