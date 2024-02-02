// proptypes
import { PropTypes } from "prop-types";

// style
import "./style/ChildCard.css";

// hooks

// assets
import { PencilSquareIcon, UserMinusIcon } from "@heroicons/react/24/outline";
import ChildFace from "../assets/childCareLogo.svg";
import useDeleteChild from "../hooks/useDeleteChild";

function ChildCard({ child, setAddChildSectionHidden, setUpdateChild }) {
  const { deleteChild, isLoading, error } = useDeleteChild();

  const {
    _id: id,
    firstname,
    lastname,
    birthday,
    walking,
    disabled,
    allergy,
  } = child;
  const formattedBirthday = new Date(birthday).toLocaleDateString();

  async function handleDelete() {
    await deleteChild(id);
  }

  async function handleUpdate(childToUpdate) {
    setUpdateChild(childToUpdate);
    setAddChildSectionHidden(false);
  }

  return (
    <div className="childCard">
      {error ? <p>{error}</p> : null}
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
        <button type="button" onClick={() => handleUpdate(child)}>
          <PencilSquareIcon
            alt="Edit child button"
            width={30}
            stroke="#9C69E2"
          />
        </button>
        <button
          disabled={isLoading}
          type="button"
          onClick={() => handleDelete()}
        >
          <UserMinusIcon
            alt="Delete child button"
            width={30}
            stroke="#9C69E2"
          />
        </button>
      </div>
    </div>
  );
}

ChildCard.propTypes = {
  child: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    walking: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    allergy: PropTypes.bool.isRequired,
  }).isRequired,
  setAddChildSectionHidden: PropTypes.func.isRequired,
  setUpdateChild: PropTypes.func.isRequired,
};
export default ChildCard;
