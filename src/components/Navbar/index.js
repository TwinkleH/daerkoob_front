import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.scss";
const Navbar = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div className="nav">
      <NavLink
        to="/"
        activeStyle={{
          textDecoration: "none",
          color: "black",
          border: "1px solid",
        }}
      >
        home
      </NavLink>
      <div className="rightNav">
        <div>
          <Link to="/transcription">리뷰</Link>
        </div>
        <div>
          <Link to="/notice">공지사항</Link>
        </div>
        <div>
          <Link to="/mypage"> 마이페이지</Link>
        </div>
        <div>
          <Link to="/login"> 로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
