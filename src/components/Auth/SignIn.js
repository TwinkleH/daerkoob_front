import React from "react";
import { useHistory } from "react-router-dom";

export const SignIn = ({ toggleIsSignIn }) => {
  const history = useHistory();
  const onSubmit = () => {
    history.push("/");
  };
  return (
    <div className="auth">
      <span>로그인</span>
      <input placeholder="id" />
      <input placeholder="password"></input>
      <button onClick={onSubmit}>로그인하기</button>
      <div>
        회원가입하시겠습니까?<strong onClick={toggleIsSignIn}>회원가입</strong>
      </div>
    </div>
  );
};
