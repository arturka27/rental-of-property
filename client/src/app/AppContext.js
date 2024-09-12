import { createContext } from "react";

const initState = {
  user: undefined,
  setUser: () => {},


  likedProperties: [],
  setLikedProperties: () => {}
};

export const AppContext = createContext(initState);