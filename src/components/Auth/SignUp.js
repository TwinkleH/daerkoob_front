import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "./Input";
import api from "api/api";
export const SignUp = ({ toggleIsSignIn }) => {
  const history = useHistory();
  const [info, setInfo] = useState({
    userId: "",
    nickName: "",
    password: "",
    confirmPassword: "",
    birth: "",
  });
  const onChange = (e) => {
    const {
      target: { value, id },
    } = e;
    setInfo({ ...info, [id]: value });
  };
  const onSubmit = async () => {
    try {
      await api
        .post("user/signup", {
          userId: info.userId,
          name: info.name,
          nickName: info.nickName,
          password: info.passwork,
          confirmPassword: info.conformPassword,
          birth: info.birth,
        })
        .then((response) => {
          console.log(response);
        });
    } catch {
      console.log("error");
    }
    // history.push("/auth");
    toggleIsSignIn(); //회원가입 하고 바로 로그인페이지로 가기
  };
  return (
    <div className="auth">
      <Input id="userId" placeholder="Id" onChange={onChange} />
      <Input id="name" placeholder="name" onChange={onChange} />
      <Input id="nickName" placeholder="nickname" onChange={onChange} />
      <Input
        id="password"
        placeholder="Password"
        onChange={onChange}
        type="password"
      />
      <Input
        id="confirmPassword"
        placeholder="repeat Password"
        type="password"
        onChange={onChange}
      />
      <Input id="birth" placeholder="birth" type="date" onChange={onChange} />
      <button onClick={onSubmit}>회원가입하기</button>
      <span className="auth__noti">
        계정이 있으신가요?<strong onClick={toggleIsSignIn}>로그인</strong>
      </span>
    </div>
  );
};
