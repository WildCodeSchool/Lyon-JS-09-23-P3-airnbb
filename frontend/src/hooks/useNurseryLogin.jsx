import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useNurseryLogin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const nurseryLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3310/nursery/login", {
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
      localStorage.setItem("pro", JSON.stringify(json));
      setIsLoading(false);
      navigate("/home"); // à modifier
    }
  };
  return { nurseryLogin, isLoading, error };
}
