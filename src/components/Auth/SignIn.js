import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import useCurrentUser from "Hooks/useCurrentUser";
export const SignIn = ({ toggleIsSignIn }) => {
  const history = useHistory();
  const { setCurrentUser } = useCurrentUser();

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
  const onSubmit = async () => {
    await setCurrentUser(info.email);

    history.push("/");
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
