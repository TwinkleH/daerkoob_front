import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
//현재 로그인한 유저 저장
const { persistAtom } = recoilPersist();

export const currentUserState = atom({
  key: "currentUserState",
  default: null,
  effects_UNSTABLE: [persistAtom],
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
