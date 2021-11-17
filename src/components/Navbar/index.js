import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.scss";
import useCurrentUser from "Hooks/useCurrentUser";
import useCurrentForm from "../../Hooks/useCurrentForm";
const Navbar = () => {
  const history = useHistory();
  // const activeStyle = {
  //   background: "black",
  //   color: "white",
  // };
  const { currentUser, setCurrentUser } = useCurrentUser();
  const { currentForm, setCurrentForm } = useCurrentForm();

  // const toggleForm = () => {
  //   setCurrentForm((prevForm) =>
  //     prevForm === "필사페이지" ? "리뷰페이지" : "필사페이지"
  //   );
  // };
  console.log(currentUser);
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUserState");
    history.push("/");
  };
  return (
    <div className="nav">
      <div className="nav__left">
        <Link to="/">home</Link>
      </div>
      <div className="nav__rightBottom">
        <div>
          <Link to="/form">필사/리뷰</Link>
        </div>
        <div>
          <Link to="/notice">공지사항</Link>
        </div>
        <div>
          <Link to="/mypage"> 마이페이지</Link>
        </div>
      </div>
      {currentUser ? (
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
