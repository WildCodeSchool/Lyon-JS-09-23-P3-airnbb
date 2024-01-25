// react
import { useState } from "react";

// react-router
import { Link } from "react-router-dom";

// function
import { handlePasswords } from "../../helpers";

// hooks
import useCreateNursery from "../../hooks/useCreateNursery";

function NurserySignup() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [placeMax, setPlaceMax] = useState("");
  const [form, setForm] = useState(false);
  const [message, setMessage] = useState("");

  const { createNursery } = useCreateNursery();

  async function handleNursery(e) {
    e.preventDefault();
    const newNursery = {
      name,
      address,
      email,
      password: secondPassword,
      place_max: placeMax,
    };
    await createNursery(newNursery);
    setName("");
    setAddress("");
    setEmail("");
    setFirstPassword("");
    setSecondPassword("");
    setPlaceMax("");
  }
  // regex match password syntax
  const validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; // (?= ) pour regarder en avant si présence du motif et .* veut dire n'importe où dans la chaîne

  function checkPasswordFormat(e) {
    const newPassword = e.target.value; // déclarer nouvelle variable car mise à jour d'état asynchrone dans react
    setFirstPassword(newPassword);

    if (validPassword.test(newPassword)) {
      setForm(true);
      setMessage("");
    } else {
      setForm(false);
      if (newPassword.length < 8) {
        setMessage("Veuillez saisir au minimum 8 caractères");
      }
      if (!/[!@#$%^&*()_+\-=[\]{}|;:',.<>?/]/.test(newPassword)) {
        setMessage("Veuillez saisir au minimum 1 caractère spécial");
      }
      if (!/[A-Z]/.test(newPassword)) {
        setMessage("Veuillez saisir au minimum 1 majuscule.");
      }
      if (!/[0-9]/.test(newPassword)) {
        setMessage("Veuillez saisir au minimum 1 chiffre");
      }
    }
  }

  return (
    <main className="connect">
      <h3>Je m&apos;inscris en tant que professionnel</h3>
      <form action="" onSubmit={handleNursery}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresse"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre de places maximales"
          value={placeMax}
          onChange={(e) => setPlaceMax(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={firstPassword}
          onChange={checkPasswordFormat}
        />
        <br />
        <small>{message}</small>
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={secondPassword}
          onChange={(e) => setSecondPassword(e.target.value)}
        />
        {firstPassword !== secondPassword && (
          <p style={{ fontWeight: "700", fontSize: "1rem" }}>
            Les mots de passe ne correspondent pas.
          </p>
        )}
        <div>
          <input type="checkbox" />
          J&apos;accepte les conditions
        </div>
        <button
          type="submit"
          className={
            form && handlePasswords(firstPassword, secondPassword)
              ? "submitButton"
              : "deadButton"
          }
        >
          S&apos;inscrire
        </button>
      </form>
      <Link to="/nurserylogin">
        Vous avez déjà un compte ? <span>Se connecter</span>
      </Link>
    </main>
  );
}

export default NurserySignup;
