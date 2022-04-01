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

      <div className="nav__input">
        <FaSearch size="20" />
        <input
          placeholder="제목, 작가, 출판사 입력"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        ></input>
      </div>

      <div className="nav__right">
        <div className="nav__right__c1">
          <Link to="/notice">공지사항</Link>
        </div>
        <div className="nav__right__c1">
          <Link to="/mypage"> {currentUser.nickName}</Link>
        </div>
      </div>

      {currentUser.id !== 0 ? (
        <div className="nav__right">
          <div>
            <button className="button__nav" onClick={handleLogout}>
              {" "}
              로그아웃
            </button>
          </div>
        </div>
      ) : (
        <div className="nav__right">
          <button className="button__nav">
            <Link to="/auth"> 로그인</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
