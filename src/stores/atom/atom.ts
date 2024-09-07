import { atom } from "recoil";

export const isActiveCategory = atom<string[]>({
  key: "isActiveCategory",
  default: [],
});
