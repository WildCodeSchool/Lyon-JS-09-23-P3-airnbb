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
import ParentsForm from "./pages/ParentsForm";

// hooks
import useScreenSize from "./hooks/useScreenSize";

// style
import "./App.css";
import NotFound from "./pages/NotFound";

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
      <Route path="/parents" element={<ParentsForm />} />
      <Route path="*" element={<NotFound />} />
    </>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;
