import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [form, setForm] = useState(false);

  // regex match email syntax
  const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/;

  function handleEmail(e) {
    setEmail(e);
    if (validEmail.test(email)) {
      setForm(true);
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
          onChange={(e) => setFirstPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={secondPassword}
          onChange={(e) => setSecondPassword(e.target.value)}
        />
        {firstPassword !== secondPassword && (
          <p style={{ fontWeight: "700", fontSize: "1.25rem" }}>
            Passwords don&apos;t match
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
