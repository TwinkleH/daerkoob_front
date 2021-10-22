import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.scss";
const Navbar = () => {
  // const activeStyle = {
  //   background: "black",
  //   color: "white",
  // };
  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">home</Link>
      </div>
      <div className="nav__rightBottom">
        <div>
          <Link to="/transcription">리뷰</Link>
        </div>
        <div>
          <Link to="/notice">공지사항</Link>
        </div>
        <div>
          <Link to="/mypage"> 마이페이지</Link>
        </div>
      </div>
      <div className="nav__rightTop">
        <div>
          <Link to="/auth"> 로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
