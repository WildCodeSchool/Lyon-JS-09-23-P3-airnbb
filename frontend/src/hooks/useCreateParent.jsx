import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useCreateParent() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const createParent = async (newParent) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:3310/parent", {
      method: "POST",
      body: JSON.stringify(newParent),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setIsLoading(false);
      setError(null);
      navigate("/home");
    }
  };
  return { createParent, isLoading, error };
}

export default useCreateParent;
