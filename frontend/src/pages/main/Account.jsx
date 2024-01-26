// react
import { useState } from "react";

// react-router
import { useNavigate } from "react-router-dom";

// library
import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

// pages & components
import useLogout from "../../hooks/useLogout";
import ChildList from "./ChildList";

// hooks
import useParentContext from "../../hooks/useParentContext";

// styles
import "./styles/Account.css";

function Account() {
  const [sectionChildrenHidden, setSectionChildrenHidden] = useState(true);
  const { logout } = useLogout();
  const { parentContext } = useParentContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleChildrenSection = () => {
    setSectionChildrenHidden(!sectionChildrenHidden);
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
            <button type="button" onClick={handleChildrenSection}>
              <UsersIcon width={40} />
              Mon/Mes enfants
            </button>
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
      <ChildList
        sectionChildrenHidden={sectionChildrenHidden}
        setSectionChildrenHidden={setSectionChildrenHidden}
        parentContext={parentContext}
      />
    </div>
  );
}

export default Account;
