// proptypes
// import { PropTypes } from "prop-types";

// style
import "./style/BookingCard.css";

function BookingCard() {
  return (
    <div>
      <div className="">
        <p>nom et prenom</p>
        <p>date anniv</p>
      </div>
      <div className="">
        <p>nom creche</p>
      </div>
      <div className="">
        <p>adresse creche</p>
      </div>

      <div className="">
        <p>date de resa</p>
      </div>
    </div>
  );
}

// BookingCard.propTypes = {
//   child: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     firstname: PropTypes.string.isRequired,
//     lastname: PropTypes.string.isRequired,
//     birthday: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default BookingCard;
