import { useNavigate } from "react-router-dom";
import "./Account.css";

// library
import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

import useLogout from "../../hooks/useLogout";
import useParentContext from "../../hooks/useParentContext";

function Account() {
  const { logout } = useLogout();
  const { parentContext } = useParentContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="parentAccount">
      <header className="accountHeader">
        <h3>
          {parentContext?.firstname} {parentContext?.lastname}
        </h3>
      </header>
      <div className="optionContainer">
        <div className="accountOptions">
          <div className="option">
            <HeartIcon width={40} />
            <p className="textOptions">Mes favoris</p>
          </div>
          <div className="option">
            <UsersIcon width={40} />
            <p className="textOptions">Mon/Mes enfant(s)</p>
          </div>
          <div className="option">
            <CalendarDaysIcon width={40} />
            <p className="textOptions">Mes réservations</p>
          </div>
        </div>
        <div className="optionLogOut">
          <ArrowRightEndOnRectangleIcon width={40} />
          <button type="button" onClick={handleLogout} className="buttonLogout">
            Me déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
