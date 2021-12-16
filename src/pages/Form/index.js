import React from "react";
//  { useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";

import "./index.scss";
// import api from "api/api";
import BookList from "components/List/BookList";
import useCurrentBooks from "Hooks/useCurrentBooks";
// import _data from "book.json";
const Form = () => {
  // const mockData = _data.concat();
  // console.log(mockData);
  // const toggleForm = () => {
  //   console.log(currentForm);
  //   setCurrentForm((prevForm) =>
  //     prevForm === "필사페이지" ? "리뷰페이지" : "필사페이지"
  //   );
  // };
  //const [data, setData] = useState([]);
  const { currentBooks } = useCurrentBooks();
  // const [title, setTitle] = useState("");
  // const handleChange = (e) => {
  //   setTitle(e.target.value);
  // };
  // const handleKeyPress = (e) => {
  //   //엔터키로 입력하기
  //   if (e.key === "Enter") {
  //     handleSubmit();
  //   }
  // };
  // const handleSubmit = async () => {
  //   try {
  //     await api
  //       .post("book/find", null, {
  //         params: {
  //           title: title,
  //           display: 18,
  //         },
  //       })
  //       .then((response) => {
  //         setCurrentBooks([...response.data]);
  //       });
  //   } catch {
  //     console.log("error");
  //   }
  // };

  return (
    <div className="form">
      {currentBooks && (
        <div className="form__wrapper">
          <BookList data={currentBooks} />
        </div>
      )}
    </div>
  );
};

export default Form;
