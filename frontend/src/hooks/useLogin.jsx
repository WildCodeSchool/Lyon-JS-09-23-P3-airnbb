// react
import { useState } from "react";

// react-router
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3310/parent/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      setIsLoading(false);
      navigate("/home");
    }
  };

  return { login, isLoading, error };
}
