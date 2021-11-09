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
  // const img_link ="https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";

  // const toggleForm = () => {
  //   console.log(currentForm);
  //   setCurrentForm((prevForm) =>
  //     prevForm === "필사페이지" ? "리뷰페이지" : "필사페이지"
  //   );
  // };
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
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
        .post("", null, {
          //url 먼지
          params: {
            //파람스 뭐로 넘길지
          },
        })
        .then((response) => {
          // if (response.data === false) {
          //   console.log("실패");
          //   history.push("/auth");
          //   setMessage("실패했습니다");
          // } else if (response.data === true) {
          //   setCurrentUser(info.userId); //이건 프론트딴에서 memberId이 들어왔다고 하는거...;
          //   alert("로그인성공");
          //   history.push("/");
          // }
        });
    } catch {
      console.log("401error");
    }
  };
  const data = {};
  return (
    <div className="form">
      <div className="form__input">
        <Input
          placeholder="제목입력"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        ></Input>
        <button onClick={handleSubmit}>검색</button>
      </div>
      <div className="form__wrapper">
        <Transcription data={mockData} />
      </div>
    </div>
  );
};

export default Form;
