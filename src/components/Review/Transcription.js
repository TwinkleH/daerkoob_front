import React from "react";
import BookCard from "components/Card/BookCard";

const Transcription = () => {
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  return (
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
  );
};

export default Transcription;
