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
        const response = await fetch("http://localhost:3310/booking", {
          headers: { Authorization: `Bearer ${nurseryContext.token}` },
        });
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
