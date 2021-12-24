import React from "react";

import "./index.scss";
import BookList from "components/List/BookList";
import useCurrentBooks from "Hooks/useCurrentBooks";
// import _data from "book.json";
const Form = () => {
  // const mockData = _data.concat();
  // console.log(mockData);
  // const toggleForm = () => {
  //   console.log(currentForm);
  //   setCurrentForm((prevForm) =>
  //     prevForm === "필사페이지" ? "리뷰페이지" : "필사페이지"
  //   );
  // };
  //const [data, setData] = useState([]);
  const { currentBooks } = useCurrentBooks();

  return (
    <div className="form">
      {currentBooks && (
        <div className="form__wrapper">
          <BookList data={currentBooks} />
        </div>
      )}
    </div>
  );
};

export default Form;
