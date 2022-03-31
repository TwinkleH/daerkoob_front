import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "components/Card/BookCard.scss";
import useCurrentUser from "Hooks/useCurrentUser";
import { AiFillCheckCircle } from "react-icons/ai";
//import BookDetail from "components/Card/BookDetail";
//import useContents from "Hooks/useContents";
// import { currentContent } from 'Store';
import api from "api/api";

const BookCard = ({ data }) => {
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  const { title, image, isbn } = data;
  const [flip, setFlip] = useState(false); //일단 뒤집혀지지 않음
  const [isTransExist, setIsTransExist] = useState(false);
  const [isReviewExist, setIsReviewExist] = useState(false);
  const history = useHistory();
  const { currentUser } = useCurrentUser();
  const handleClick = async () => {
    setFlip(!flip);
  };
  useEffect(() => {
    const init = async () => {
      const response1 = await api.get(`transcription/judge/${isbn}`);
      const response2 = await api.get(`review/judge/${isbn}`);
      response1.data && setIsTransExist(true);
      response2.data && setIsReviewExist(true);
    };
    init();
  }, []);
  return (
    <div className="bookCard" onClick={handleClick}>
      {flip ? (
        <>
          {isTransExist && (
            <div
              onClick={() => {
                history.push({
                  pathname: `/detail/${isbn}`,
                  state: {
                    // isRegister: false,
                    isTranscription: true,
                    title: `${title}`,
                  },
                });
              }}
            >
              필사
            </div>
          )}
          {isReviewExist ? (
            <div
              onClick={() => {
                history.push({
                  pathname: `/detail/${isbn}`,
                  state: {
                    isRegister: false,
                    isTranscription: false,
                    title: `${title}`,
                  },
                });
              }}
            >
              리뷰
            </div>
          ) : (
            <div
              onClick={() => {
                history.push({
                  pathname: `/detail/${isbn}`,
                  state: {
                    isRegister: true,
                    isTranscription: false,
                    title: `${title}`,
                  },
                });
              }}
            >
              리뷰쓰러가기
            </div>
          )}

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
          {isTransExist ? <AiFillCheckCircle /> : ""}
        </>
      )}
    </div>
  );
};

export default BookCard;
