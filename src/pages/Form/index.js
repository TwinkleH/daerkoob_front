import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import useCurrentForm from "../../Hooks/useCurrentForm";
import BookCard from "components/Card/BookCard";
import Input from "components/Auth/Input";
import openApi from "api/openApi";
const Form = () => {
  const { currentForm, setCurrentForm } = useCurrentForm();
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";

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

  return (
    <div className="form">
      <Input
        className="form__input"
        placeholder="제목입력"
        onChange={handleChange}
      ></Input>
      <div className="form__wrapper">
        <BookCard title="해리포터" image={img_link} />
        <BookCard title="반지의제왕" image={img_link} />
        <BookCard title="헝거게임" image={img_link} />
        <BookCard title="나니아연대기" image={img_link} />
        <BookCard title="트와일라잇" image={img_link} />
        <div>하이</div>
        <div>하이</div>
        {/* <div>하이</div>
      <div>하이</div>
     
      <div>하이</div>
      <div>하이</div>
      <div>하이</div>
      <div>하이</div>
      <div>하이</div> */}
      </div>
    </div>
  );
};

export default Form;
