import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useCreateNursery() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const createNursery = async (newNursery) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/nursery`,
      {
        method: "POST",
        body: JSON.stringify(newNursery),
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setIsLoading(false);
      setError(null);
      navigate("/promainpage"); // à modifier
    }
  };
  return { createNursery, isLoading, error };
}

export default useCreateNursery;
