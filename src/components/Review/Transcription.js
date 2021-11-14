import React from "react";
import BookCard from "components/Card/BookCard";
const Transcription = ({ data }) => {
  console.log(data);
  return (
    <div className="form__wrapper">
      {data.map((d) => (
        <BookCard
          data={d}
          // image={d.image ? d.image : img_link}
        />
      ))}
    </div>
  );
};

export default Transcription;
