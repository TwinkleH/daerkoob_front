import { atom } from "recoil";

export const currentUserState = atom({
  key: "currentUserState",
  default: null,
});

export const currentFormState = atom({
  key: "currentFormState",
  default: "필사페이지",
});

export const currentContentState = atom({
  key: "currentContentState",
  default: "",
});

export const currentBookState = atom({
  key: "currentBookState",
  default: "",
});
