import { createContext } from "react";

export default createContext({
  get: () => [],
  set: () => {},
  add: () => {},
  remove: () => {},
  empty: () => {},
  count: 0,
  totalValue: 0,
});
