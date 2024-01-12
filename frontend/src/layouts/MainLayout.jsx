import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}

export default MainLayout;
