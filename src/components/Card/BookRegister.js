import React, { useState } from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import "components/Card/BookRegister.scss";
import { useEffect } from "react";
import api from "api/api";
import { useHistory } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
const BookRegister = ({ toggle, isbn, onClick }) => {
  const [reviewContent, setReviewContent] = useState("");
  const { currentUser } = useCurrentUser();

  const [currentBook, setCurrentBook] = useState([]);
  const history = useHistory();
  const handleChange = (e) => {
    setReviewContent(e.target.value);
  };
  const [starColor, setStarColor] = useState(["", "", "", "", ""]);
  const [score, setScore] = useState();

  //하나하나 내용 칠때마다 set되는게 아니라 서브밋 누르면 한번에 되고 싶은데 그러면 한번 실행을 했다가 해야함...

  const handleSubmit = async () => {
    const response = await api.post("review/register", null, {
      params: {
        userId: currentUser.id,
        isbn,
        reviewContent,
        score,
      },
    });

    if (response.data) {
      alert("저장했습니다.");
      history.push("/");
    }
  };
  useEffect(() => {
    const findBook = async () => {
      const response = await api.get(`book/find/${isbn}`);
      setCurrentBook(response.data);
    };
    findBook();
    return () => {
      // cleanup;
    };
  }, []);
  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...starColor];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = "red";
      else clickStates[i] = "";
    }
    setScore(index + 1);
    setStarColor(clickStates);
  };
  return (
    <div className="bookDetail">
      <div onClick={onClick}> x</div>
      <div className="bookDetail__wrapper">
        <img src={currentBook.image} alt="" />
        <div>
          제목:
          {currentBook.title}
        </div>
        <div>
          저자:
          {currentBook.author}
        </div>
        <div>
          출판사:
          {currentBook.publisher}
        </div>
        <div>
          필사:
          <textarea
            className="bookDatail__input"
            cols="40"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="star">
          <BsStarFill
            onClick={(e) => handleStarClick(e, 0)}
            color={starColor[0]}
          />
          <BsStarFill
            onClick={(e) => handleStarClick(e, 1)}
            color={starColor[1]}
          />
          <BsStarFill
            onClick={(e) => handleStarClick(e, 2)}
            color={starColor[2]}
          />
          <BsStarFill
            onClick={(e) => handleStarClick(e, 3)}
            color={starColor[3]}
          />
          <BsStarFill
            onClick={(e) => handleStarClick(e, 4)}
            color={starColor[4]}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>저장</button>
        </div>
        <div>
          {/* {currentContent} */}
          <button onClick={toggle}>다른사람 쓴 글 보러가기</button>
        </div>
      </div>
    </div>
  );
};

export default BookRegister;
