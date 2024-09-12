import { createContext } from "react";

const initState = {
  user: undefined,
  setUser: () => {},
  properties: [],
  setProperties: () => {},
  categories: [],
  setCategories: () => {},
};

export const AppContext = createContext(initState);
