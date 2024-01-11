import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// layouts
import IntroLayout from "./layouts/IntroLayout";

// pages
import Login from "./pages/intro/Login";
import Signup from "./pages/intro/Signup";
import Intro from "./pages/intro/Intro";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import MainPage, { loader as loaderNursery } from "./pages/main/MainPage";
import ChildForm from "./pages/childForm/ChildForm";

// hooks
import useScreenSize from "./hooks/useScreenSize";

// style
import "./App.css";

function App() {
  const screenSize = useScreenSize();

  const routes = (
    <>
      {screenSize.width > 705 ? (
        <Route path="/" element={<IntroLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Route>
      ) : (
        <Route path="/" element={<IntroLayout />}>
          <Route index element={<Intro />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      )}

      <Route path="/home" element={<MainLayout />}>
        <Route index element={<MainPage />} loader={loaderNursery} />
      </Route>
      <Route path="/child" element={<ChildForm />} />
      <Route path="*" element={<NotFound />} />
    </>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;
