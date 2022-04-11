import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import useCurrentUser from "Hooks/useCurrentUser";

import api from "api/api";
export const SignIn = ({ toggleIsSignIn, from }) => {
  const history = useHistory();
  const { setCurrentUser } = useCurrentUser();

  const [message, setMessage] = useState("");
  const [info, setInfo] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    const {
      target: { value, id },
    } = e;
    setInfo({ ...info, [id]: value });
  };

  //localstorage에 저장하는거 추가하기
  const handleSubmit = async () => {
    try {
      await api
        .post("user/login", null, {
          params: {
            userId: info.userId, //인터넷에 api post쳐봐서 이런식으로 보내면 된다고 했는데...
            password: info.password,
          },
        })
        .then((response) => {
          if (!response.data) {
            history.push("/auth");
            setMessage("실패했습니다");
          } else if (response.data) {
            setCurrentUser(response.data); //이건 프론트딴에서 memberId이 들어왔다고 하는거...;
            alert("로그인성공");
            from();
          }
        });
    } catch {
      console.log("401error");
    }
  };
  const handleKeyPress = (e) => {
    //엔터키로 입력하기
    // console.log("enter", e);
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="auth">
      <Input
        id="userId"
        placeholder="userId"
        value={info.userId}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Input
        id="password"
        placeholder="Password"
        value={info.password}
        onChange={handleChange}
        type="password"
        onKeyPress={handleKeyPress}
      />
      <button
        className="button__sign"
        onClick={handleSubmit}
        style={{ margin: "5%" }}
      >
        로그인
      </button>
      <span className="auth__noti">
        회원가입하시겠습니까?&nbsp;&nbsp;
        <strong onClick={toggleIsSignIn}>회원가입</strong>
      </span>

      <div className="auth__message">{message ?? message}</div>
    </div>
  );
};
