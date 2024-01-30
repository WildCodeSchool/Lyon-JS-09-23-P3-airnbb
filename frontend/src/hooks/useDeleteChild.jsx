// react
import { useState } from "react";

// context
import useParentContext from "./useParentContext";
import useChildContext from "./useChildContext";

function useDeleteChild() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { parentContext } = useParentContext();
  const { dispatch } = useChildContext();

  const deleteChild = async (childId) => {
    if (!parentContext || !parentContext.token) {
      return;
    }
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:3310/child/${childId}`, {
      method: "DELETE",
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
      dispatch({ type: "DELETE_CHILDREN", payload: child });
    }
  };
  return { deleteChild, isLoading, error };
}

export default useDeleteChild;
