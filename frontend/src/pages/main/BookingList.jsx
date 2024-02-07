import { useNavigate } from "react-router-dom";
// library
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
// hooks
import useFetchBookingByParentId from "../../hooks/useFetchBookingByParentId";

// style
import "./styles/BookingList.css";
import logoChild from "../../assets/childForm.svg";

function BookingList() {
  const navigate = useNavigate();
  const { booking } = useFetchBookingByParentId();

  return (
    <div className="bookingListContainer">
      <header className="headerBooking">
        <button
          className="btnReturn"
          type="button"
          onClick={() => navigate("/home/account")}
          aria-label="go back"
        >
          <ChevronLeftIcon width={35} />
        </button>
        <img
          className="logoParentBooking"
          src={logoChild}
          alt="logo parent and baby"
        />
      </header>

      {booking !== null &&
        booking.map((booked) => {
          const formattedDate = new Date(
            booked.availability_id.date
          ).toLocaleDateString();
          return (
            <div className="bookingCard">
              <p>
                {booked.child_id.firstname} {booked.child_id.lastname}
              </p>
              <p>{formattedDate}</p>
              <p>{booked.availability_id.nursery_id.name}</p>
              <p>{booked.availability_id.nursery_id.address}</p>
            </div>
          );
        })}
    </div>
  );
}
export default BookingList;
