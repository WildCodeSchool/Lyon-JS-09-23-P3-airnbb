import { useState } from "react";
import useParentContext from "./useParentContext";
import useChildContext from "./useChildContext";

function useCreateChild() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { parentContext } = useParentContext();
  const { dispatch } = useChildContext();

  const createChild = async (newChild) => {
    if (!parentContext || !parentContext.token) {
      return;
    }
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:3310/child", {
      method: "POST",
      body: JSON.stringify(newChild),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${parentContext.token}`,
      },
    });

    const child = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(child.error);
    }

    if (response.ok) {
      setIsLoading(false);
      setError(null);
      dispatch({ type: "CREATE_CHILDREN", payload: child });
    }
  };
  return { createChild, isLoading, error };
}

export default useCreateChild;
