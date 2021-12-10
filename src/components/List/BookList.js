import React from "react";
import BookCard from "components/Card/BookCard";
const BookList = ({ data }) => {
  // console.log(data);
  return (
    <div className="form__wrapper">
      {data.map((d) => (
        <BookCard data={d} />
      ))}
    </div>
  );
};

export default BookList;
