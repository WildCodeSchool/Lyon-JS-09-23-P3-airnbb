import { createContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";

export const ParentAuthContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { parentContext: action.payload };
    case "LOGOUT":
      return { parentContext: null };
    default:
      return state;
  }
};

export function ParentProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    parentContext: null,
  });
  const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);
  console.info("commentparentContext", state);
  return (
    <ParentAuthContext.Provider value={contextValue}>
      {children}
    </ParentAuthContext.Provider>
  );
}

ParentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
