import { useNavigate } from "react-router-dom";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

// import hooks
import useFetchAvailability from "../../hooks/useFetchAvailibility";
import useNurseryContext from "../../hooks/useNurseryContext";
import useNurseryLogout from "../../hooks/useNurseryLogout";

// import css and icons
import "./styles/NurseryMainPage.css";
import childrenIcone from "../../assets/enfants.png";
import parentsIcone from "../../assets/parents.png";
import bookingIcone from "../../assets/reservation.png";

function NurseryMainPage() {
  const { availability } = useFetchAvailability();
  const { nurseryContext } = useNurseryContext();

  const navigate = useNavigate();
  const { logout } = useNurseryLogout();

  const handleLogout = () => {
    logout();
    navigate("/nurserylogin");
  };

  const availabilityDate = new Date(
    availability && availability.date
  ).toLocaleDateString();
  return (
    <div className="nurseryPage">
      <header className="accountHeader">
        <h3>{nurseryContext.name} </h3>
        <div className="nurseryLogout">
          <ArrowRightEndOnRectangleIcon width={20} />
          <button
            type="button"
            onClick={handleLogout}
            className="btnNurseryogout"
          >
            Me déconnecter
          </button>
        </div>
      </header>
      <div className="buttonFilterContainer">
        <button type="button">Toutes les réservations</button>
        <button type="button">Trier par jour</button>
        <button type="button">Trier par semaine</button>
        <button type="button">Trier par mois</button>
      </div>
      <div className="bookingCardPro">
        <div className="childAndparentsIcons">
          <div className="childName">
            <img
              src={childrenIcone}
              alt="icone enfants"
              width={35}
              height={35}
            />
            <p>Nom de l&apos;enfant</p>
          </div>
          <div className="parentsName">
            <img
              src={parentsIcone}
              alt="icone parents"
              width={35}
              height={35}
            />
            <p>Nom du parent</p>
          </div>
        </div>
        <div className="bookingIcon">
          <div className="bookingDate">
            <img
              src={bookingIcone}
              alt="icone reservation"
              width={35}
              height={35}
            />
            <p>{availabilityDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NurseryMainPage;
