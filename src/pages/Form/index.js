import Transcription from "components/Review/Transcription";
import Review from "components/Review/Review";
// import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import "./index.scss";
import useCurrentForm from "../../Hooks/useCurrentForm";
import BookCard from "components/Card/BookCard";
const Form = () => {
  const { currentForm, setCurrentForm } = useCurrentForm();
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  // console.log(currentForm);
  // const history = useHistory();
  // const location = useLocation();
  // const [note, setNote] = useState(true);

  // const [kind, setKind] = useState("필사");
  // useEffect(() => {
  //   const { pathname } = location;
  //   if (pathname === "/review") setKind("리뷰");
  //   else if (pathname === "/transcription") setKind("필사");
  //   else history.push("/");
  // }, [history, location]);

  const toggleForm = () => {
    console.log(currentForm);
    setCurrentForm((prevForm) =>
      prevForm === "필사페이지" ? "리뷰페이지" : "필사페이지"
    );
  };
  console.log(currentForm);
  return (
    <div className="form">
      {/* <button onClick={toggleForm}>바꾸기</button> */}
      {/* {currentForm === "필사페이지" ? (
        <Review onClick={toggleForm} />
      ) : (
        <Transcription onClick={toggleForm} />
      )} */}
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
