import { createContext } from "react";

const initState = {
  user: undefined,
  setUser: () => {},
  properties: [],
  setProperties: () => {},
  categories: [],
  setCategories: () => {},
     likedProperties: [],
  setLikedProperties: () => {}
};

export const AppContext = createContext(initState);
