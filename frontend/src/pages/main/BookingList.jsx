// library
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
// style
import "./styles/BookingList.css";
import BookingCard from "../../components/BookingCard";

function BookingList() {
  const navigate = useNavigate();

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
      <div>
        <BookingCard />
      </div>
    </div>
  );
}

export default BookingList;
