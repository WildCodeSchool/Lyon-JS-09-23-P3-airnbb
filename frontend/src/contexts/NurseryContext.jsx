import { createContext, useReducer, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const NurseryAuthContext = createContext();

export const NurseryAuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { nurseryContext: action.payload };
    case "LOGOUT":
      return { nurseryContext: null };
    default:
      return state;
  }
};

export function NurseryProvider({ children }) {
  const [state, dispatch] = useReducer(NurseryAuthReducer, {
    nurseryContext: null,
  });
  const [loading, setLoading] = useState(true);
  const contextNurserieValue = useMemo(() => ({ ...state, dispatch }), [state]);

  useEffect(() => {
    const fetchDataNursery = async () => {
      try {
        const nurseryLoggedIn = JSON.parse(localStorage.getItem("pro"));
        if (nurseryLoggedIn) {
          dispatch({ type: "LOGIN", payload: nurseryLoggedIn });
        }
      } finally {
        setLoading(false);
      }
    };
    fetchDataNursery();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <NurseryAuthContext.Provider value={contextNurserieValue}>
      {children}
    </NurseryAuthContext.Provider>
  );
}

NurseryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
