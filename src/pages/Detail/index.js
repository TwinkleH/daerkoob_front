import BookRegister from "components/Card/BookRegister";
import React, { useState, useEffect } from "react";
import api from "api/api";
import useCurrentBook from "Hooks/useCurrentBook";
import Transcription from "../../components/Review/Transcription";
import TransList from "components/Card/TransList";

const Detail = () => {
  const [otherTrans, setOtherTrans] = useState([]);
  const { currentBook } = useCurrentBook();
  const [isRegister, setIsRegister] = useState(true);
  const handleToggle = () => {
    setIsRegister(!isRegister);
  };
  useEffect(() => {
    console.log("디테일페이지 새로 옴");

    const handleExist = async () => {
      await api
        .post("transcription/click", null, {
          params: {
            isbn: currentBook.isbn,
          },
        })
        .then((response) => {
          let preData = [];
          console.log(response);
          if (response.data) {
            response.data.forEach((item) => {
              preData.push(item);
            });
            setOtherTrans(preData);
            setIsRegister(false);
          }
        });
    };
    handleExist();
    return () => {};
  }, []);

  console.log(otherTrans);
  return (
    <div>
      {isRegister ? (
        <BookRegister toggle={handleToggle} />
      ) : (
        <TransList data={otherTrans} toggle={handleToggle} />
      )}
    </div>
  );
};

export default Detail;
