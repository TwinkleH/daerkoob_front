// import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { SignIn } from "components/Auth/SignIn";
import { SignUp } from "components/Auth/SignUp";
import "pages/Auth/index.scss";
import { useLocation } from "react-router";
import { useHistory } from "react-router";
// import Header from "components/Auth/Header";
// import Main from "components/Auth/Main";
// import Layout from "components/Common/Layout";

const Auth = ({ location }) => {
  const history = useHistory();
  // const location = useLocation();
  console.log(location);
  // const [kind, setKind] = useState("로그인");
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  // useEffect(() => {
  //   const { pathname } = location;
  //   if (pathname === "/signup") setKind("회원가입");
  //   else if (pathname === "/login") setKind("로그인");
  //   else history.push("/");
  // }, [history, location]);

  const beforeLocation = () => {
    !location.state ? history.push("/") : history.push(location.state.from);
  };
  return (
    <div className="sign">
      {isSignIn ? (
        <SignIn toggleIsSignIn={toggleIsSignIn} from={beforeLocation} />
      ) : (
        <SignUp toggleIsSignIn={toggleIsSignIn} />
      )}
    </div>
  );
};

export default Auth;
