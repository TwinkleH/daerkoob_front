import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "components/Card/BookCard.scss";
//import BookDetail from "components/Card/BookDetail";
//import useContents from "Hooks/useContents";
// import { currentContent } from 'Store';
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
const BookCard = ({ data }) => {
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  const { currentUser } = useCurrentUser();
  const { title, image, isbn } = data;
  const [flip, setFlip] = useState(false); //일단 뒤집혀지지 않음
  const [isExist, setIsExist] = useState(false);
  const history = useHistory();

  const handleClick = async () => {
    // await setCurrentBook(data);
    // console.log(currentBook);
    const response1 = await api.get(`transcription/judge/${isbn}`);
    const response2 = await api.get(`review/judge/${isbn}`);
    console.log(response1);
    console.log(response2);
    response1.data && setIsExist(true);
    response2.data && setIsExist(true);
    console.log(isExist);
    setFlip(!flip);
  };

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
            <>
              <div
                onClick={() => {
                  history.push({
                    pathname: `/detail/${isbn}`,
                    state: { isRegister: false, isTranscription: true },
                  });
                }}
              >
                다른사람 필사 보기
              </div>
              <div
                onClick={() => {
                  history.push({
                    pathname: `/detail/${isbn}`,
                    state: { isRegister: false, isTranscription: false },
                  });
                }}
              >
                다른사람 리뷰 보기
              </div>
            </>
          )}
          <div
            onClick={() => {
              history.push({
                pathname: `/detail/${isbn}`,
                state: { isRegister: true, isTranscription: true },
              });
            }}
          >
            필사 쓰러가기
          </div>
          <div
            onClick={() => {
              history.push({
                pathname: `/detail/${isbn}`,
                state: { isRegister: true, isTranscription: false },
              });
            }}
          >
            리뷰 쓰러가기
          </div>
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
