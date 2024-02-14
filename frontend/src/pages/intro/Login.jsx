// react
import { useState } from "react";

// react-router
import { Link, useNavigate } from "react-router-dom";

// functions
import useLogin from "../../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        <button
          className="switchMode"
          type="button"
          onClick={() => navigate("/nurseryLogin")}
        >
          pro
        </button>
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
        <Link to="/signup" className="inscriptionLink">
          Pas de compte ?&nbsp;<span> S&apos;inscrire</span>
        </Link>

        <button
          type="submit"
          disabled={isLoading}
          className={password ? "submitButton" : "deadButton"}
        >
          Se connecter
        </button>
        {error && <h4>{error.message}</h4>}
      </form>
    </main>
  );
}

export default Login;
