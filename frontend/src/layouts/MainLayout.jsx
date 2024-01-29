import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavbarDesktop from "../components/Navbar/NavbarDesktop";

// hooks
import useScreenSize from "../hooks/useScreenSize";

function MainLayout() {
  const screenSize = useScreenSize();

  const nav = (
    <>
      <Outlet />
      {screenSize.width > 705 ? <NavbarDesktop /> : <Navbar />}
    </>
  );

  return nav;
}

export default MainLayout;
