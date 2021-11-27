import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
//현재 로그인한 유저 저장
const { persistAtom } = recoilPersist();

export const currentUserState = atom({
  key: "currentUserState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
//클릭한 책 저장
export const currentBookState = atom({
  key: "currentBookState",
  default: "",
});
