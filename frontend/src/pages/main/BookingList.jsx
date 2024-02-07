import { useNavigate } from "react-router-dom";
// library
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
// hooks
import useFetchBooking from "../../hooks/useFetchBooking";

// style
import "./styles/BookingList.css";

function BookingList() {
  const navigate = useNavigate();
  const { booking } = useFetchBooking();

  return (
    <div className="bookingContainer">
      <header className="btnReturnContainer">
        <button
          className="btnReturn"
          type="button"
          onClick={() => navigate("/home/account")}
          aria-label="go back"
        >
          <ChevronLeftIcon width={35} />
        </button>
      </header>
      <div className="bookingCardPro">
        {booking !== null &&
          booking.map((booked) => (
            <div className="childAndparentsIcons">
              <div className="childName">
                <p>
                  {booked.child_id.firstname} {booked.child_id.lastname}
                </p>
              </div>
              <p>
                {booked.child_id.parent_id.firstname}
                {booked.child_id.parent_id.lastname}
              </p>
              <p>{booked.availability_id.date}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default BookingList;
