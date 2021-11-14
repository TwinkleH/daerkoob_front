import React, { useState } from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import useCurrentBook from "Hooks/useCurrentBook";
import useContents from "Hooks/useContents";
import "components/Card/BookRecord.scss";
const BookRecord = ({ match }) => {
  const { currentContent, setCurrentContents } = useContents();
  const { currentUser } = useCurrentUser();
  const { currentBook } = useCurrentBook();
  const {
    book_id,
    title,
    author,
    publisher,
    pubdate,
    thumb,
    star,
    isbn,
    image,
  } = currentBook;
  console.log(currentBook);

  //하나하나 내용 칠때마다 set되는게 아니라 서브밋 누르면 한번에 되고 싶은데 그러면 한번 실행을 했다가 해야함...
  const handleSubmit = () => {
    setCurrentContents(document.getElementById("bookDatail__input").value);

    // console.log(document.getElementsByClassName("bookDatail__input"));
  };
  console.log(currentContent);
  return (
    <div className="bookDetail">
      <div className="bookDetail__wrapper">
        <img src={image} alt="" />
        <div>
          제목:{title ? title.replace(/<b>/gi, "").replace(/<\/b>/gi, "") : ""}
        </div>
        <div>저자:{author}</div>
        <div> 출판사:{publisher}</div>
        <div>
          필사:
          <textarea id="bookDatail__input" cols="40" rows="10"></textarea>
        </div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};

export default BookRecord;
