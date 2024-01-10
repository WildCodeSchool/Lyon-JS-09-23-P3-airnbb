// react
import { useState } from "react";

// react-router
import { Link } from "react-router-dom";

// functions
import useLogin from "../../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();
    await login(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <main className="connect">
      <header>
        <div>pro</div>
      </header>
      <h3>Je me connecte</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
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
          type="submit"
          disabled={isLoading}
          className={password ? "submitButton" : "deadButton"}
        >
          Se connecter
        </button>
        {error && <h4>{error.message}</h4>}
      </form>
      <Link to="/signup">
        Pas de compte ? <span>S&apos;inscrire</span>
      </Link>
    </main>
  );
}

export default Login;
