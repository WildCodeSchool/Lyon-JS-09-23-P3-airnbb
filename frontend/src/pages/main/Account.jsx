import { useLoaderData } from "react-router-dom";
import "./Account.css";

// library
import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
  UsersIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

export async function loader() {
  const response = await fetch(
    "http://localhost:3310/parent/65798b54f9784d836b35622e"
  );
  const json = await response.json();
  return json;
}

function Account() {
  const user = useLoaderData();
  console.info(user);
  return (
    <div className="parentAccount">
      <header className="accountHeader">
        <h3>
          {user.firstname} {user.lastname}
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
          <p className="textOptions">Me déconnecter</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
