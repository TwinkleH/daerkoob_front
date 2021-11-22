import BookRegister from "components/Card/BookRegister";
import React, { useState, useEffect } from "react";
import api from "api/api";

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
  const { params } = match; //url params

  const [otherTrans, setOtherTrans] = useState([]);
  // const { currentBook } = useCurrentBook();
  const [isRegister, setIsRegister] = useState(location.state.isRegister); //작성페이지인지 아닌지

  const handleToggle = () => {
    //작성페이지 vs 필사리스트
    setIsRegister(!isRegister);
  };
  const handleThumb = () => {
    //좋아요누르면
    handleExist();
  };

  const handleExist = async () => {
    const response = await api.get(`transcription/inquiry/${params.isbn}`);
    //검색
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

  useEffect(() => {
    console.log("디테일페이지 새로 옴");

    handleExist();
    return () => {};
  }, []);

  // console.log(otherTrans);
  return (
    <div>
      {isRegister ? (
        <BookRegister toggle={handleToggle} isbn={params.isbn} />
      ) : (
        <TransList
          data={otherTrans}
          toggle={handleToggle}
          onThumb={handleThumb}
        />
      )}
    </div>
  );
};

export default Detail;
