import React, { useState } from "react";
import useCurrentUser from "Hooks/useCurrentUser";
import useCurrentBook from "Hooks/useCurrentBook";
import useContents from "Hooks/useContents";
const BookDetail = ({ match }) => {
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
  //const handleChange = (e) => {};
  const handleSubmit = () => {
    setCurrentContents(document.getElementById("bookDatail__input").value);
    console.log("하이");
    // console.log(document.getElementsByClassName("bookDatail__input"));
    console.log(document.getElementById("bookDatail__input").value);
    console.log(currentContent);
  };

  return (
    <div className="bookDeatil">
      <div>
        제목:{title ? title.replace(/<b>/gi, "").replace(/<\/b>/gi, "") : ""}
        저자:{author}
        출판사:{publisher}
        ... 필사:
        <input id="bookDatail__input" type="text"></input>
      </div>
      <button onClick={handleSubmit}>저장</button>
    </div>
  );
};

export default BookDetail;
