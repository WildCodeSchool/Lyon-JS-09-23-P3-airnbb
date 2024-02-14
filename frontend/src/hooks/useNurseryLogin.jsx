import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useNurseryContext from "./useNurseryContext";

export default function useNurseryLogin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useNurseryContext();

  const nurseryLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/nurserylogin`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      localStorage.setItem("pro", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
      setIsLoading(false);
      navigate("/nurserypage");
    }
  };
  return { nurseryLogin, isLoading, error };
}
