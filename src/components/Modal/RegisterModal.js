import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import api from "api/api";
import useCurrentUser from "Hooks/useCurrentUser";
import ReactStars from "react-stars"; //별점매기기
const RegisterModal = ({ isOpen, onClose, isbn, type }) => {
  const [currentBook, setCurrentBook] = useState();
  const [content, setContent] = useState("");
  const { currentUser } = useCurrentUser();
  const [score, setScore] = useState(0);
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setScore(newRating);
    console.log(score);
  };
  const handleSubmit = async () => {
    const response = await api.post(`${type}/register`, null, {
      params: {
        userId: currentUser.id,
        isbn: isbn,
        content: content,
        score: score,
      },
    });

    if (response.data) {
      alert("저장했습니다.");
      onClose();
    }
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
    content: {
      width: "100%",
      height: "70vh",
      position: "absolute",
      top: "50%",
      left: " 50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #eee",
      borderRadius: "15px",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      outline: "none",
      padding: "20px",
      textAlign: "center",
      // backgroundColor: "gray",
    },
  };
  // useEffect(() => {
  //   document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = `position: ""; top: "";`;
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   };
  // }, []);
  useEffect(() => {
    const findBook = async () => {
      const response = await api.get(`book/find/${isbn}`);
      setCurrentBook(response.data);
    };
    findBook();
  });
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      {currentBook && (
        <>
          <img src={currentBook.image} alt="" height="280" width="180" />
          <div>제목: {currentBook.title}</div>
          <div> 저자: {currentBook.author}</div>
          <div>출판사: {currentBook.publisher}</div>
          <textarea
            className="bookDatail__input"
            cols="40"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <div>
            {type === "review" && (
              <ReactStars
                className="starRating"
                count={5}
                onClick={ratingChanged}
                onChange={ratingChanged}
                size={40}
                color2={"#ffd700"}
              />
            )}
            <button onClick={handleSubmit}>저장</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={onClose}>닫기</button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default RegisterModal;
