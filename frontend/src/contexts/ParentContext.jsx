import { createContext, useReducer, useMemo, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);
  // checking if the parent is logged in or not
  useEffect(() => {
    const fetchData = async () => {
      try {
        const parentLoggedIn = JSON.parse(localStorage.getItem("user"));
        if (parentLoggedIn) {
          dispatch({ type: "LOGIN", payload: parentLoggedIn });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <ParentAuthContext.Provider value={contextValue}>
      {children}
    </ParentAuthContext.Provider>
  );
}

ParentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
