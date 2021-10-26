import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "./Input";
import api from "api/api";
export const SignUp = ({ toggleIsSignIn }) => {
  const history = useHistory();
  const [info, setInfo] = useState({
    memberId: "",
    nickName: "",
    password: "",
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
          memberId: info.memberId,
          nickName: info.nickName,
          password: info.passwork,
          birth: info.birth,
        })
        .then((response) => {
          console.log(response);
        });
    } catch {
      console.log("error");
    }
    history.push("/");
  };
  return (
    <div className="auth">
      <Input id="memberId" placeholder="Id" onChange={onChange} />
      <Input id="nickName" placeholder="nickname" onChange={onChange} />
      <Input id="password" placeholder="Password" onChange={onChange} />
      <Input id="confirmPassword" placeholder="repeat Password" />
      <Input id="birth" placeholder="birth" type="date" onChange={onChange} />
      <button onClick={onSubmit}>회원가입하기</button>
      <span className="auth__noti">
        계정이 있으신가요?<strong onClick={toggleIsSignIn}>로그인</strong>
      </span>
    </div>
  );
};
