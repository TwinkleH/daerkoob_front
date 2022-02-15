import React from "react";

const PageNum = ({ index, handlePageChange }) => {
  console.log(index);
  return <li onClick={() => handlePageChange(index)}>{index}</li>;
};
const Pagination = ({ setNumber, total }) => {
  const handlePageChange = (num) => {
    setNumber(num);
    // console.log(num);
  };
  console.log(total);
  return (
    <div>
      <ul>
        {/* <li onClick={() => handlePageChange(1)}>1</li>
        <li onClick={() => handlePageChange(2)}>2</li>
        <li onClick={() => handlePageChange(3)}>3</li> */}

        {[...Array(parseInt(total / 5 + 1))].map((e, i) => (
          <div>
            <PageNum index={i + 1} handlePageChange={handlePageChange} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
