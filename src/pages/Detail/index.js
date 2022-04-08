import React, { useEffect, useState } from "react";

import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import DetailList from "components/List/DetailList";
import RegisterModal from "components/Modal/RegisterModal";
import "./index.scss";
const Detail = ({ match, location }) => {
  const { currentUser } = useCurrentUser();
  const [currentBook, setCurrentBook] = useState([]);
  const { params } = match; //url params
  const [registerTrans, setRegisterTrans] = useState(false);
  const [registerReview, setRegisterReview] = useState(false);
  useEffect(() => {
    const findBook = async () => {
      const response = await api.get(`book/find/${params.isbn}`);
      setCurrentBook(response.data);
    };
    console.log("디테일페이지");
    findBook();
  }, []);
  console.log(currentBook);
  return (
    <div className="detail">
      <div className="detail__information">
        <div className="detail__information__img">
          <img src={currentBook.image} alt="" height="280" width="180" />
        </div>
        <div>{currentBook.title}</div>
        <div>{currentBook.author}</div>
        <div>{currentBook.publisher}</div>
        <div>{currentBook.pubdate}</div>
        <div className="detail__information__description">
          {currentBook.description}
        </div>
      </div>
      <div className="detail__list">
        <div className="detail__list__trans">
          <DetailList type="transcription" isbn={params.isbn} />
          {currentUser.id !== 0 && (
            <button onClick={() => setRegisterTrans(true)}>
              필사작성하러가기
            </button>
          )}
          <RegisterModal
            isOpen={registerTrans}
            onClose={() => setRegisterTrans(false)}
            type="transcription"
            isbn={params.isbn}
          />
        </div>
        <div className="detail__list__review">
          <DetailList type="review" isbn={params.isbn} />
          {currentUser.id !== 0 && (
            <button onClick={() => setRegisterReview(true)}>
              리뷰작성하러가기
            </button>
          )}
          <RegisterModal
            isOpen={registerReview}
            onClose={() => setRegisterReview(false)}
            type="review"
            isbn={params.isbn}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
