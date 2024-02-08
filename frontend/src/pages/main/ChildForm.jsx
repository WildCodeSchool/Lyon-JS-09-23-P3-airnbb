// proptypes
import { PropTypes } from "prop-types";

// react
import { useEffect, useState } from "react";

// library
import { CheckCircleIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

// hooks
import useCreateChild from "../../hooks/useCreateChild";
import useUpdateChild from "../../hooks/useUpdateChild";

// helpers
import { formatDate } from "../../helpers";

// assets
import logoChild from "../../assets/childForm.svg";

// styles
import "./styles/ChildForm.css";

function ChildForm({
  addChildSectionHidden,
  setAddChildSectionHidden,
  parentContext,
  updateChild,
  setUpdateChild,
}) {
  const [lastname, setlastname] = useState("");
  const [firstname, setfirstname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [walking, setWalking] = useState(false);
  const [disabled, setDisable] = useState(false);
  const [allergy, setAllergy] = useState(false);

  const { createChild, isLoading, error } = useCreateChild();
  const { updateChildren } = useUpdateChild();
  const { _id: id } = parentContext;

  useEffect(() => {
    if (Object.values(updateChild).length !== 0) {
      setlastname(updateChild.lastname);
      setfirstname(updateChild.firstname);
      setBirthday(updateChild.birthday);
      setWalking(updateChild.walking);
      setDisable(updateChild.disabled);
      setAllergy(updateChild.allergy);
    }
  }, [addChildSectionHidden]);

  function handleReset() {
    setUpdateChild({});
    setlastname("");
    setfirstname("");
    setBirthday("");
    setWalking(false);
    setDisable(false);
    setAllergy(false);
    setAddChildSectionHidden(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newChild = {
      parent_id: id,
      lastname,
      firstname,
      birthday,
      walking,
      disabled,
      allergy,
    };
    if (Object.values(updateChild).length !== 0) {
      // eslint-disable-next-line no-underscore-dangle
      await updateChildren(newChild, updateChild._id);
    } else {
      await createChild(newChild);
    }

    handleReset();
  }

  return (
    <div
      className={
        addChildSectionHidden
          ? "addChildrenContainer"
          : "addChildrenContainer addChildrenContainerNotHidden"
      }
    >
      <div className="header">
        <button
          type="button"
          className="createTitle"
          onClick={() => handleReset()}
          aria-label="go back"
        >
          <ChevronLeftIcon width={35} />
        </button>

        <img src={logoChild} alt="logo enfant" />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          required
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          required
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date de naissance"
          required
          value={
            updateChild.birthday ? formatDate(updateChild.birthday) : birthday
          }
          onChange={(e) => setBirthday(e.target.value)}
        />

        <div className="check">
          <input
            type="checkbox"
            id="walk"
            onChange={() => setWalking(!walking)}
          />
          <label htmlFor="walk">
            <CheckCircleIcon
              width={30}
              className={walking ? "svgIsClicked" : "svgIsNotClicked"}
            />
            Mon enfant sait marcher.
          </label>
        </div>

        <div className="check">
          <input
            type="checkbox"
            id="disabilities"
            onChange={() => setDisable(!disabled)}
          />
          <label htmlFor="disabilities">
            <CheckCircleIcon
              width={30}
              className={disabled ? "svgIsClicked" : "svgIsNotClicked"}
            />
            Mon enfant a un handicap.
          </label>
        </div>

        <div className="check">
          <input
            type="checkbox"
            id="allergy"
            onChange={() => setAllergy(!allergy)}
          />
          <label htmlFor="allergy">
            <CheckCircleIcon
              width={30}
              className={allergy ? "svgIsClicked" : "svgIsNotClicked"}
            />
            Mon enfant a des allergies.
          </label>
        </div>
        {error && <p>{error}</p>}
        <button
          disabled={isLoading}
          className={
            firstname && lastname && birthday ? "submitButton" : "deadButton"
          }
          type="submit"
        >
          Enregistrer mon enfant
        </button>
      </form>
    </div>
  );
}

ChildForm.propTypes = {
  addChildSectionHidden: PropTypes.bool,
  setAddChildSectionHidden: PropTypes.func,
  parentContext: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  updateChild: PropTypes.shape({
    _id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    birthday: PropTypes.string,
    walking: PropTypes.bool,
    disabled: PropTypes.bool,
    allergy: PropTypes.bool,
  }),
  setUpdateChild: PropTypes.func,
};

ChildForm.defaultProps = {
  updateChild: undefined,
  addChildSectionHidden: undefined,
  setAddChildSectionHidden: undefined,
  parentContext: undefined,
  setUpdateChild: undefined,
};

export default ChildForm;
