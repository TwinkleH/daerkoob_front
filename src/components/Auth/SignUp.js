import React from "react";
import Input from "./Input";
export const SignUp = ({ toggleIsSignIn }) => {
  // const onChange =
  return (
    <div className="auth">
      <Input id="name" placeholder="name" />
      <Input id="nickname" placeholder="nickname" />
      <Input id="email" placeholder="Email" />
      <Input id="password" placeholder="Password" />
      <Input id="confirmPassword" placeholder="repeat Password" />

      <button>회원가입하기</button>
      <span className="auth__noti">
        계정이 있으신가요?<strong onClick={toggleIsSignIn}>로그인</strong>
      </span>
    </div>
  );
};
