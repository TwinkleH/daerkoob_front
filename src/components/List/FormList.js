import React from "react";
import BookCard from "components/Card/BookCard";
const FormList = ({ data }) => {
  return (
    <div className="form__wrapper">
      {data.map((d) => (
        <BookCard data={d} />
      ))}
    </div>
  );
};

export default FormList;
