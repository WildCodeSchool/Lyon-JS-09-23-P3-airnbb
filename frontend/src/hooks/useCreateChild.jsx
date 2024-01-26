import { useState } from "react";

function useCreateChild() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const createChild = async (newChild) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:3310/child", {
      method: "POST",
      body: JSON.stringify(newChild),
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
    }
  };
  return { createChild, isLoading, error };
}

export default useCreateChild;
