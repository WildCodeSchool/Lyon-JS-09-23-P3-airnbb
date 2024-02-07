import { useEffect, useState } from "react";
import useParentContext from "./useParentContext";

function useFetchBookingByParentId() {
  const [booking, setBooking] = useState(null);
  const { parentContext } = useParentContext();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        if (!parentContext || !parentContext.token) {
          throw new Error("Authentication token not available.");
        }
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/bookingparentid?parentId=${
            // eslint-disable-next-line no-underscore-dangle
            parentContext._id
          }`,
          {
            headers: { Authorization: `Bearer ${parentContext.token}` },
          }
        );
        const bookingData = await response.json();
        setBooking(bookingData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooking();
  }, [parentContext]);
  return { booking };
}

export default useFetchBookingByParentId;
