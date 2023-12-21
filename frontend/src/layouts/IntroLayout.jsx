// components
import { Outlet } from "react-router-dom";

// pages
import Intro from "../pages/intro/Intro";

// hooks
import useScreenSize from "../hooks/useScreenSize";

// styles
import "./styles/IntroLayout.css";

function IntroLayout() {
  const screenSize = useScreenSize();

  return (
    <div className="container">
      {screenSize.width > 705 && (
        <section className="introLayout">
          <Intro screenSize={screenSize} />
        </section>
      )}

      <section className="introLayout">
        <Outlet />
      </section>
    </div>
  );
}

export default IntroLayout;
