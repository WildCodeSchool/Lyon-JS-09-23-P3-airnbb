// components
import { Outlet } from "react-router-dom";

// styles
import "./styles/IntroLayout.css";

function IntroLayout() {
  return (
    <div className="container">
      <section className="introLayout">
        <Outlet />
      </section>
    </div>
  );
}

export default IntroLayout;
