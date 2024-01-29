import { useEffect, useState } from "react";
import useParentContext from "./useParentContext";

function useFetchBooking() {
  const [booking, setBooking] = useState(null);
  const { parentContext } = useParentContext();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch(
          "http://localhost:3310/booking/6596d0654ef2092432ae5093",
          {
            headers: { Authorization: `Bearer ${parentContext.token}` },
          }
        );
        const json = await response.json();
        setBooking(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooking();
  }, []);
  return { booking };
}

export default useFetchBooking;
