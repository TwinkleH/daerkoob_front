import BookRegister from "components/Card/BookRegister";
import React, { useState, useEffect } from "react";
import api from "api/api";
import useCurrentBook from "Hooks/useCurrentBook";
import Transcription from "../../components/Review/Transcription";
import TransList from "components/Card/TransList";
import qs from "qs";

const Detail = ({ match, location }) => {
  // console.log("Match");
  // console.dir(match);
  // console.log("Location");
  // console.dir(location);
  // const query = qs.parse(location.search, {
  //   iignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략
  // });
  // console.log(query);
  const { params } = match;

  const [otherTrans, setOtherTrans] = useState([]);
  // const { currentBook } = useCurrentBook();
  const [isRegister, setIsRegister] = useState(location.state.isRegister);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  useEffect(() => {
    console.log("디테일페이지 새로 옴");

    const handleExist = async () => {
      const response = await api.get(`transcription/inquiry/${params.isbn}`);
      let preData = [];
      console.log(response);
      if (response.data.length > 0) {
        response.data.forEach((item) => {
          preData.push(item);
        });
        setOtherTrans(preData);
        // setIsRegister(false);
      }
    };

    handleExist();
    return () => {};
  }, []);

  // console.log(otherTrans);
  return (
    <div>
      {isRegister ? (
        <BookRegister toggle={handleToggle} isbn={params.isbn} />
      ) : (
        <TransList data={otherTrans} toggle={handleToggle} />
      )}
    </div>
  );
};

export default Detail;
