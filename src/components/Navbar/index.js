import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.scss";
import useCurrentUser from "Hooks/useCurrentUser";
import api from "api/api";
import useCurrentBooks from "Hooks/useCurrentBooks";
import "./index.scss";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  const history = useHistory();
  // const activeStyle = {
  //   background: "black",
  //   color: "white",
  // };
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { currentBooks, setCurrentBooks } = useCurrentBooks();

  const [title, setTitle] = useState("");
  const handleLogout = () => {
    setCurrentUser({ id: 0 });
    localStorage.removeItem("currentUserState");
    history.push("/");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleKeyPress = (e) => {
    //엔터키로 입력하기
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = async () => {
    try {
      await api
        .post("book/find", null, {
          params: {
            title: title,
            display: 18,
          },
        })
        .then((response) => {
          setCurrentBooks([...response.data]);
          history.push("/form");
        });
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">home</Link>
      </div>
      <div className="nav__rightBottom">
        <div className="form__input">
          <FaSearch size="30" />
          <input
            placeholder="제목, 작가, 출판사 입력"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          ></input>
          <button onClick={handleSubmit}>검색</button>
        </div>
        <div>
          <Link to="/notice">공지사항</Link>
        </div>
        <div>
          <Link to="/mypage"> 마이페이지</Link>
        </div>
      </div>
      {currentUser.id !== 0 ? (
        <div className="nav__rightTop">
          <div>
            <button onClick={handleLogout}> 로그아웃</button>
          </div>
          <div>{currentUser.nickName}</div>
        </div>
      ) : (
        <div className="nav__rightTop">
          <button>
            <Link to="/auth"> 로그인</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
