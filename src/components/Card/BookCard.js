import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "components/Card/BookCard.scss";
//import BookDetail from "components/Card/BookDetail";
//import useContents from "Hooks/useContents";
// import { currentContent } from 'Store';
import useCurrentBook from "Hooks/useCurrentBook";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
const BookCard = ({ data }) => {
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  const { currentUser } = useCurrentUser();
  const { title, image, isbn } = data;
  const [flip, setFlip] = useState(false); //일단 뒤집혀지지 않음
  const { currentBook, setCurrentBook } = useCurrentBook();
  const [isExist, setIsExist] = useState(false);
  const history = useHistory();

  const handleClick = async () => {
    // await setCurrentBook(data);
    // console.log(currentBook);
    const response = await api.get(`transcription/judge/${isbn}`);

    console.log(response);
    !response.data || setIsExist(true);
    console.log(isExist);
    setFlip(!flip);
  };
  // const handleMouseOut = () => {
  //   setFlip(false);
  // };
  // useEffect(() => {
  //   return () => {
  //     history.push("/bookrecord");
  //   };
  // }, [currentBook]);
  //이렇게 해결하는게 맞나?
  //아니면 디비에서 불러와서 해야하는게 맞나?
  //이것도 localstorage에 넣어야하나?
  // onClick=
  return (
    <div
      className="bookCard"
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {flip ? (
        <>
          {isExist && (
            <button
              onClick={() => {
                history.push({
                  pathname: `/detail/${isbn}`,
                  state: { isRegister: false },
                });
              }}
            >
              다른사람 필사 보기
            </button>
          )}
          <button
            onClick={() => {
              history.push({
                pathname: `/detail/${isbn}`,
                state: { isRegister: true },
              });
            }}
          >
            필사 쓰러가기
          </button>
          {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
        </>
      ) : (
        <>
          <img
            src={image ? image : img_link}
            alt=""
            className="bookCard__img"
          />
          {title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
        </>
      )}
    </div>
  );
};

export default BookCard;
