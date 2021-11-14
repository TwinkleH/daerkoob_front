import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from "react-router-dom";

import "./index.scss";
import useCurrentForm from "../../Hooks/useCurrentForm";
import BookCard from "components/Card/BookCard";
import Input from "components/Auth/Input";
import api from "api/api";
import Transcription from "components/Review/Transcription";
import _data from "book.json";
const Form = () => {
  const mockData = _data.concat();
  const { currentForm, setCurrentForm } = useCurrentForm();
  console.log(mockData);
  // const toggleForm = () => {
  //   console.log(currentForm);
  //   setCurrentForm((prevForm) =>
  //     prevForm === "필사페이지" ? "리뷰페이지" : "필사페이지"
  //   );
  // };
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleKeyPress = (e) => {
    //엔터키로 입력하기
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = async () => {
    try {
      await api
        .post("book/find", null, {
          params: {
            title: title,
            display: 18,
          },
        })
        .then((response) => {
          console.log(response);
          let preData = [];
          response.data.forEach((item) => {
            preData.push(item);
          });
          setData(preData);
          console.log(data);
        });
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="form">
      <div className="form__input">
        <input
          placeholder="제목입력"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        ></input>
        <button onClick={handleSubmit}>검색</button>
      </div>
      <div className="form__wrapper">
        {/* <Transcription data={data} /> */}
        <Transcription data={mockData} />
      </div>
    </div>
  );
};

export default Form;
