import React from "react";

const PageNum = ({ index, handlePageChange }) => {
  return (
    <button
      onClick={() => handlePageChange(index)}
      style={{ cursor: "pointer", width: "10px" }}
    >
      {index}
    </button>
  );
};
const Pagination = ({ setNumber, total }) => {
  const handlePageChange = (num) => {
    setNumber(num);
    // console.log(num);
  };
  const style = {
    display: "flex",
    gap: "10px",
  };
  console.log(total);
  return (
    <div style={style}>
      {[...Array(parseInt(total / 5 + 1))].map((e, i) => (
        <PageNum index={i + 1} handlePageChange={handlePageChange} />
      ))}
    </div>
  );
};

export default Pagination;
