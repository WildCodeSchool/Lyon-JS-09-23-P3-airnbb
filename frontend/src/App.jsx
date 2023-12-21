import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// layouts
import IntroLayout from "./layouts/IntroLayout";

// pages
import Intro from "./pages/intro/Intro";
import Signup from "./pages/intro/Signup";
import Login from "./pages/intro/Login";

// hooks

// style
import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<IntroLayout />}>
        <Route index element={<Intro />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
