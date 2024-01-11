import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [form, setForm] = useState(false);
  const [message, setMessage] = useState("");

  // regex match email syntax
  const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/;

  function handleEmail(e) {
    setEmail(e);
    if (validEmail.test(email)) {
      setForm(true);
    }
  }

  // regex match password syntax
  const validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; // (?= ) pour regarder en avant si présence du motif et .* veut dire n'importe où dans la chaîne

  function handlePassword(e) {
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

  function handlePasswords(passwordOne, passwordTwo) {
    if (
      (passwordOne !== "" || passwordTwo !== "") &&
      passwordOne === passwordTwo
    ) {
      return true;
    }
    return false;
  }

  return (
    <main className="connect">
      <h3>Je m&apos;inscris</h3>
      <form action="">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={firstPassword}
          onChange={handlePassword}
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
          type="button"
          className={
            form && handlePasswords(firstPassword, secondPassword)
              ? "submitButton"
              : "deadButton"
          }
        >
          S&apos;inscrire
        </button>
      </form>
      <Link to="/login">
        Vous avez déjà un compte ? <span>Se connecter</span>
      </Link>
    </main>
  );
}

export default Signup;
