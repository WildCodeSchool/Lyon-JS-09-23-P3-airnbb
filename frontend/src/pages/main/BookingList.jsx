import { useNavigate } from "react-router-dom";
// library
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
// hooks
import useFetchBookingByParentId from "../../hooks/useFetchBookingByParentId";
// style
// import "./styles/BookingList.css";
function BookingList() {
  const navigate = useNavigate();
  const { booking } = useFetchBookingByParentId();

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
      {booking !== null &&
        booking.map((booked) => {
          const formattedDate = new Date(
            booked.availability_id.date
          ).toLocaleDateString();
          return (
            <div className="">
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
