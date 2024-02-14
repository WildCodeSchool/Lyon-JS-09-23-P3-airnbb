import { NavLink } from "react-router-dom";
import "../style/NavbarDesktop.css";
// library
import { UserIcon, BellIcon } from "@heroicons/react/24/solid";
import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

function NavbarDesktop() {
  return (
    <div className="sidebarLeft">
      <NavLink
        to="."
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <Squares2X2Icon width={30} />
        <p> Home </p>
      </NavLink>
      <NavLink
        to="search"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <MagnifyingGlassIcon width={30} />
        <p> Recherche </p>
      </NavLink>
      <NavLink
        to="account"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <UserIcon width={30} />
        <p> Mon Compte </p>
      </NavLink>
      <NavLink
        to="notification"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <BellIcon width={30} />
        <p> Notifications </p>
      </NavLink>
      <NavLink
        to="chat"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <ChatBubbleOvalLeftEllipsisIcon width={30} />
        <p> Chat </p>
      </NavLink>
    </div>
  );
}

export default NavbarDesktop;
