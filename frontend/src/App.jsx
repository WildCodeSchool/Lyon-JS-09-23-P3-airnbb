import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// layouts
import IntroLayout from "./layouts/IntroLayout";

// pages
import Login from "./pages/intro/Login";
import Signup from "./pages/intro/Signup";
import Intro from "./pages/intro/Intro";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/main/MainPage";
import Search from "./pages/main/Search";
import Account from "./pages/main/Account";
import Notification from "./pages/main/Notification";
import Chat from "./pages/main/Chat";
import NurseryLogin from "./pages/intro/NurseryLogin";
import NurserySignup from "./pages/intro/NurserySignup";

// hooks
import useScreenSize from "./hooks/useScreenSize";
import useParentContext from "./hooks/useParentContext";

// style
import "./App.css";

function App() {
  const screenSize = useScreenSize();
  const { parentContext } = useParentContext();
  const routes = (
    <>
      {screenSize.width > 705 ? (
        <Route
          path="/"
          element={parentContext ? <Navigate to="/home" /> : <IntroLayout />}
        >
          <Route
            path="signup"
            element={parentContext ? <Navigate to="/home" /> : <Signup />}
          />
          <Route
            index
            element={parentContext ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="login"
            element={parentContext ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="nurserylogin" element={<NurseryLogin />} />
          <Route path="nurserysignup" element={<NurserySignup />} />
        </Route>
      ) : (
        <Route
          path="/"
          element={parentContext ? <Navigate to="/home" /> : <IntroLayout />}
        >
          <Route
            index
            element={parentContext ? <Navigate to="/home" /> : <Intro />}
          />
          <Route
            path="signup"
            element={parentContext ? <Navigate to="/home" /> : <Signup />}
          />
          <Route
            path="login"
            element={parentContext ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="nurserylogin" element={<NurseryLogin />} />
          <Route path="nurserysignup" element={<NurserySignup />} />
        </Route>
      )}

      <Route
        path="/home"
        element={!parentContext ? <Navigate to="/login" /> : <MainLayout />}
      >
        <Route
          index
          element={!parentContext ? <Navigate to="/login" /> : <MainPage />}
        />
        <Route
          path="search"
          element={!parentContext ? <Navigate to="/login" /> : <Search />}
        />
        <Route
          path="account"
          element={!parentContext ? <Navigate to="/login" /> : <Account />}
        />
        <Route
          path="notification"
          element={!parentContext ? <Navigate to="/login" /> : <Notification />}
        />
        <Route
          path="chat"
          element={!parentContext ? <Navigate to="/login" /> : <Chat />}
        />
      </Route>
      <Route
        path="*"
        element={!parentContext ? <Navigate to="/login" /> : <NotFound />}
      />
    </>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}

export default App;
