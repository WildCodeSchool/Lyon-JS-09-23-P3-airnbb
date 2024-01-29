// proptypes
import { PropTypes } from "prop-types";

// style
import "./style/ChildCard.css";

// assets
import { PencilSquareIcon, UserMinusIcon } from "@heroicons/react/24/outline";
import ChildFace from "../assets/childCareLogo.svg";

function ChildCard({ child }) {
  const { firstname, lastname, birthday, walking, disabled, allergy } = child;
  const formattedBirthday = new Date(birthday).toLocaleDateString();
  return (
    <div className="childCard">
      <div className="childCard__child">
        <img src={ChildFace} alt="child profil pic" width={50} id="childFace" />
      </div>
      <div className="childCard__name">
        <p>
          {firstname} {lastname}
        </p>
        <p>{formattedBirthday}</p>
      </div>
      <div className="childCard__spec">
        <span className={walking ? "details active" : "details"}>
          {walking ? "Sait marcher" : "Ne sait pas marcher"}
        </span>
        <span className={disabled ? "details active" : "details"}>
          {disabled ? "A un handicap" : "N'a pas d'handicap"}
        </span>
        <span className={allergy ? "details active" : "details"}>
          {allergy ? "A une allergie" : "N'a pas d'allergie"}
        </span>
      </div>
      <div className="childCard__buttons">
        <PencilSquareIcon alt="Edit child button" width={30} stroke="#9C69E2" />
        <UserMinusIcon alt="Delete child button" width={30} stroke="#9C69E2" />
      </div>
    </div>
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
