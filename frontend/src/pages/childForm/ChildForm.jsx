import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import logoChild from "../../assets/childForm.svg";
import "./ChildForm.css";
import useCreateChild from "../../hooks/useCreateChild";
import useParentContext from "../../hooks/useParentContext";

function ChildForm() {
  const { parentContext } = useParentContext();
  const [parentId, setParentId] = useState(parentContext);
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [walking, setWalking] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [allergy, setAllergy] = useState(false);

  const navigate = useNavigate();

  const handleClickWalking = () => {
    setWalking(!walking);
  };

  const handleClickDisabled = () => {
    setDisabled(!disabled);
  };

  const handleClickAllergy = () => {
    setAllergy(!allergy);
  };

  const { createChild } = useCreateChild();

  async function handleSubmit(event) {
    event.preventDefault();
    const newChild = {
      parent_id: parentId,
      lastname,
      firstname,
      birthday,
      walking,
      disabled,
      allergy,
    };
    console.info(newChild);
    await createChild(newChild);
    setParentId(parentContext);
    setLastname("");
    setFirstname("");
    setBirthday("");
    setWalking(false);
    setDisabled(false);
    setAllergy(false);
  }
  // console.info(parentId);
  return (
    <main className="createChild">
      <div className="headerChildForm">
        <ChevronLeftIcon
          width={30}
          className="leftChevron"
          onClick={() => navigate("/")}
        />
        <h3>Ajouter un enfant</h3>
      </div>
      <img src={logoChild} alt="logo enfant formulaire" />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={lastname}
          required
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={firstname}
          required
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date de naissance"
          value={birthday}
          required
          onChange={(e) => setBirthday(e.target.value)}
        />
        <div className="check">
          <CheckCircleIcon
            width={30}
            onClick={handleClickWalking}
            className={walking ? "isWalking" : "isNotWalking"}
          />
          Mon enfant sait marcher
        </div>
        <div className="check">
          <CheckCircleIcon
            width={30}
            onClick={handleClickDisabled}
            className={disabled ? "isDisabled" : "isNotDisabled"}
          />
          Mon enfant a un handicap
        </div>
        <div className="check">
          <CheckCircleIcon
            width={30}
            onClick={handleClickAllergy}
            className={allergy ? "isAllergic" : "isNotAllergic"}
          />
          Mon enfant a une allergie
        </div>
        <button
          type="submit"
          className={
            firstname && lastname && birthday ? "submitButton" : "deadButton"
          }
        >
          Ajouter mon enfant
        </button>
      </form>
    </main>
  );
}

export default ChildForm;
