import { Link } from "react-router-dom";
import logoIntro from "../../assets/logo_intro_1.svg";
import doubleCoeur from "../../assets/Vector.svg";

function Intro() {
  return (
    <>
      <header className="App-header">
        <img src={logoIntro} className="App-logo" alt="logo" />
        <img
          src={doubleCoeur}
          className="doubleCoeur"
          alt="doubleCoeur"
          style={{ width: "75px" }}
        />
      </header>
      <h1>Airnbb</h1>
      <h2>Garde d&apos;enfants à la demande</h2>
      <p>Trouver un.e professionel.le de la garde d’enfant</p>
      <footer className="App-footer">
        <Link to="/login">
          Suivant<span>&gt;</span>
        </Link>
      </footer>
    </>
  );
}

export default Intro;
