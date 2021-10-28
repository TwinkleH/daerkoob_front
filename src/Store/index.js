import { atom } from "recoil";

export const currentUserState = atom({
  key: "currentUserState",
  default: null,
});

export const currentFormState = atom({
  key: "currentFormState",
  default: "필사페이지",
});
