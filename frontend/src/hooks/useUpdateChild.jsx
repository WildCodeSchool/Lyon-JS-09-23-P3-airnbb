// react
import { useState } from "react";

// context
import useParentContext from "./useParentContext";
import useChildContext from "./useChildContext";

function useUpdateChild() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { parentContext } = useParentContext();
  const { dispatch } = useChildContext();

  const updateChildren = async (childToUpdate, id) => {
    if (!parentContext || !parentContext.token) {
      return;
    }
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/child/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(childToUpdate),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parentContext.token}`,
        },
      }
    );
    const child = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(child.error);
    }

    if (response.ok) {
      setIsLoading(false);
      setError(null);
      dispatch({ type: "UPDATE_CHILDREN", payload: child });
    }
  };
  return { updateChildren, isLoading, error };
}

export default useUpdateChild;
