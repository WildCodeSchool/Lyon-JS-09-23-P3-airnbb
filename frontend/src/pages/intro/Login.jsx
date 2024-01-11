import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(false);

  // regex match email syntax
  const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/;

  function handleEmail(e) {
    setEmail(e);
    if (validEmail.test(email)) {
      setForm(true);
    }
  }

  return (
    <main className="connect">
      <header>
        <div>pro</div>
      </header>
      <h3>Je me connecte</h3>
      <form action="">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => handleEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="check">
          <input type="checkbox" />
          Se souvenir de moi
        </div>
        <button
          type="button"
          disabled={password && form}
          className={password && form ? "submitButton" : "deadButton"}
        >
          Se connecter
        </button>
      </form>
      <Link to="/signup">
        Pas de compte ? <span>S&apos;inscrire</span>
      </Link>
    </main>
  );
}

export default Login;
