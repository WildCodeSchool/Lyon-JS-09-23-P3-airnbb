import { useState } from "react";
import logoParents from "../assets/parentsForm.svg";
import "./ParentsForm.css";

function ParentsForm() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <main className="createParents">
      <h3>Création de compte</h3>
      <img src={logoParents} alt="logo parents formulaire" />
      <form action="">
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
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresse, CP, ville"
          value={adress}
          required
          onChange={(e) => setAdress(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Téléphone mobile"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          type="button"
          className={
            firstname && lastname && email && adress && phone
              ? "submitButton"
              : "deadButton"
          }
        >
          Ajouter mes informations
        </button>
      </form>
    </main>
  );
}

export default ParentsForm;
