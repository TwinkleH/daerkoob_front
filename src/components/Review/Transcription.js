import React from "react";
import BookCard from "components/Card/BookCard";
const Transcription = ({ data }) => {
  const img_link =
    "https://resource.grapplet.com/marketplace/7176/1591667231081/i.svg.preview.580x870.png";
  console.log(data);
  return (
    <div className="form__wrapper">
      {data.map((d) => (
        <BookCard title={d.title} image={d.image} />
      ))}
    </div>
  );
};

export default Transcription;
