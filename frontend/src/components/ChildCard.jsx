// proptypes
import { PropTypes } from "prop-types";

// style
import "./style/ChildCard.css";

function ChildCard({ child }) {
  const { firstname, lastname, birthday, walking, disabled, allergy } = child;

  return (
    <article className="childCard">
      <p style={{ color: "red" }}>
        {firstname} {lastname}
      </p>
      <p>est né le {birthday}</p>
      <p>{walking ? "sait marcher" : "ne sait pas marcher"}</p>
      <p>{disabled && "est porteur d'un handicap"}</p>
      <p>{allergy && `a des allergies`}</p>
    </article>
  );
}

ChildCard.propTypes = {
  child: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    walking: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    allergy: PropTypes.bool.isRequired,
  }).isRequired,
};
export default ChildCard;
