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
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const {
      target: { value, id },
    } = e;
    setInfo({ ...info, [id]: value });
  };
  const handleSubmit = async () => {
    try {
      await api
        .post("user/signup", null, {
          params: {
            userId: info.userId,
            name: info.name,
            nickName: info.nickName,
            password: info.password,
            confirmPassword: info.confirmPassword,
            birth: info.birth,
          },
        })
        .then((response) => {
          if (response.data.flag) {
            alert("회원가입 성공 ");
            toggleIsSignIn(); //회원가입 하고 바로 로그인페이지로 가기
          } else {
            alert(response.data.message);
          }
        });
    } catch {
      console.log("error");
    }
  };
  const handleKeyPress = (e) => {
    //엔터키로 입력하기
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleCheck = (e) => {
    const {
      target: { value, id },
    } = e;
    if (info.password !== value) {
      setMessage("일치하지 않습니다.");
    } else {
      setMessage("일치합니다");
      setInfo({ ...info, confirmPassword: value });
    }
  };
  return (
    <div className="auth">
      <Input
        id="userId"
        placeholder="Id"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Input
        id="name"
        placeholder="name"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Input
        id="nickName"
        placeholder="nickname"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Input
        id="password"
        placeholder="Password"
        onChange={handleChange}
        type="password"
        onKeyPress={handleKeyPress}
      />
      <Input
        id="confirmPassword"
        placeholder="repeat Password"
        type="password"
        onChange={handleCheck}
        onKeyPress={handleKeyPress}
        message={message}
      />
      <Input
        id="birth"
        placeholder="birth"
        type="date"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>회원가입하기</button>
      <span className="auth__noti">
        계정이 있으신가요?<strong onClick={toggleIsSignIn}>로그인</strong>
      </span>
    </div>
  );
};
