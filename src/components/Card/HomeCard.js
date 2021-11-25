import React from "react";

const HomeCard = ({ name, data }) => {
  return (
    <div className="homeCard">
      <div>{name}</div>
      <h1>{data}</h1>
    </div>
  );
};

export default HomeCard;
