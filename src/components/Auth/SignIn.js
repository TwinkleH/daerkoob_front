import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "./Input";

export const SignIn = ({ toggleIsSignIn }) => {
  const history = useHistory();
  const onSubmit = () => {
    history.push("/");
  };
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const {
      target: { value, id },
    } = e;

    setInfo({ ...info, [id]: value });
  };
  return (
    <div className="auth">
      <Input
        id="email"
        placeholder="Email"
        value={info.email}
        onChange={onChange}
      />

      <Input
        id="password"
        placeholder="Password"
        value={info.password}
        onChange={onChange}
      />
      <button onClick={onSubmit}>로그인하기</button>
      <span className="auth__noti">
        회원가입하시겠습니까?<strong onClick={toggleIsSignIn}>회원가입</strong>
      </span>
    </div>
  );
};
