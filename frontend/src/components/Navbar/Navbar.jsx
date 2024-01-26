// react-router
import { NavLink } from "react-router-dom";

// styles
import "./Navbar.css";
// library
import { UserIcon, BellIcon } from "@heroicons/react/24/solid";
import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <footer className="navbarFooter">
      <NavLink
        to="."
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <Squares2X2Icon width={30} />
      </NavLink>
      <NavLink
        to="search"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <MagnifyingGlassIcon width={30} />
      </NavLink>
      <NavLink
        to="account"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <UserIcon width={30} />
      </NavLink>
      <NavLink
        to="notification"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <BellIcon width={30} />
      </NavLink>
      <NavLink
        to="chat"
        className={({ isActive }) => (isActive ? "active" : null)}
      >
        <ChatBubbleOvalLeftEllipsisIcon width={30} />
      </NavLink>
      <div className="underline" />
    </footer>
  );
}

export default Navbar;
