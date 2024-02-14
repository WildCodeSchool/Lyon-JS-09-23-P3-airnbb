import { useEffect, useState } from "react";
import useParentContext from "./useParentContext";

function useFetchAvailability() {
  const [availability, setAvailability] = useState(null);
  const { parentContext } = useParentContext();

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/availability/6596b35b24c9b242e9d2e91c`,
          {
            headers: { Authorization: `Bearer ${parentContext.token}` },
          }
        );
        const json = await response.json();
        setAvailability(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAvailability();
  }, []);
  return { availability };
}

export default useFetchAvailability;
