import { atom } from "recoil";

//현재 로그인한 유저 저장
export const currentUserState = atom({
  key: "currentUserState",
  default: null,
});

//이건 쓸지말지 모르겠음
export const currentFormState = atom({
  key: "currentFormState",
  default: "필사페이지",
});

//클릭한 책 저장
export const currentBookState = atom({
  key: "currentBookState",
  default: "",
});

//작성한 내용 저장
export const currentContentState = atom({
  key: "currentContentState",
  default: "",
});
