import { useEffect, useState } from "react";
import useNurseryContext from "./useNurseryContext";

function useFetchBooking() {
  const [booking, setBooking] = useState(null);
  const { nurseryContext } = useNurseryContext();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        if (!nurseryContext || !nurseryContext.token) {
          throw new Error("Authentication token not available.");
        }
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/bookingnursery?nurseryId=${
            // eslint-disable-next-line no-underscore-dangle
            nurseryContext._id
          }`,
          {
            headers: { Authorization: `Bearer ${nurseryContext.token}` },
          }
        );
        const bookingData = await response.json();
        setBooking(bookingData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooking();
  }, [nurseryContext]);
  return { booking };
}

export default useFetchBooking;
