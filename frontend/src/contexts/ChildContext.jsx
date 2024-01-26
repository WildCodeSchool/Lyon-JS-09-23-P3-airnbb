// react
import { createContext, useMemo, useReducer } from "react";

// proptypes
import PropTypes from "prop-types";

// helpers function
import { childrenReducer } from "../helpers";

export const ChildContext = createContext();

export function ChildContextProvider({ children }) {
  const [state, dispatch] = useReducer(childrenReducer, {
    children: null,
  });

  const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <ChildContext.Provider value={contextValue}>
      {children}
    </ChildContext.Provider>
  );
}

// 'children' can be any type of React node (not just an object).
ChildContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
