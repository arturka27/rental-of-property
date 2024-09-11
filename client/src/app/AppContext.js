import { createContext } from "react";

const initState = {
  user: undefined,
  setUser: () => {},
};

export const AppContext = createContext(initState);