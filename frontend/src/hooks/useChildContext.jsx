// react
import { useContext } from "react";

// context
import { ChildContext } from "../contexts/ChildContext";

function useChildContext() {
  const context = useContext(ChildContext);

  if (!context) {
    throw Error("useChildContext must be used inside a ChildContextProvider");
  }

  return context;
}

export default useChildContext;
