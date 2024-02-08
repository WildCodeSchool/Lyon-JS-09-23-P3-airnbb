// react
import { useMemo, useState } from "react";

// react-router
import { Link } from "react-router-dom";

// function
import { handlePasswords, checkFieldsFilled } from "../../helpers";

// hooks
import useCreateParent from "../../hooks/useCreateParent";

function Signup() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [message, setMessage] = useState("");
  // memoize the form array and update it whenever any of the listed state variables change.
  const form = useMemo(
    () => [
      lastname,
      firstname,
      email,
      address,
      phone,
      firstPassword,
      secondPassword,
    ],
    [lastname, firstname, email, address, phone, firstPassword, secondPassword]
  );

  const { createParent } = useCreateParent();

  async function handleParent(e) {
    e.preventDefault();
    const newParent = {
      lastname,
      firstname,
      email,
      address,
      phone,
      password: secondPassword,
    };
    await createParent(newParent);
    setLastname("");
    setFirstname("");
    setEmail("");
    setAddress("");
    setPhone("");
    setFirstPassword("");
    setSecondPassword("");
  }

  function checkPasswordFormat(e) {
    const newPassword = e.target.value; // déclarer nouvelle variable car mise à jour d'état asynchrone dans react
    setFirstPassword(newPassword);
    // regex match password syntax
    const validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; // (?= ) pour regarder en avant si présence du motif et .* veut dire n'importe où dans la chaîne

    if (validPassword.test(newPassword)) {
      setMessage("");
    } else {
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
      <h3>Je m&apos;inscris</h3>
      <form action="" onSubmit={handleParent}>
        <input
          type="text"
          placeholder="Prénom"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresse"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <Link to="/login" className="inscriptionLink">
          Vous avez déjà un compte ?&nbsp;<span>Se connecter</span>
        </Link>
        <button
          type="submit"
          className={
            checkFieldsFilled(form) === true &&
            handlePasswords(firstPassword, secondPassword) === true
              ? "submitButton"
              : "deadButton"
          }
        >
          S&apos;inscrire
        </button>
      </form>
    </main>
  );
}

export default Signup;
