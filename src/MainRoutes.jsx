import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import RegisterForm from "./components/auth/RegisterFrom/RegisterForm";
import { Program } from "./components/Program/Program";
import { Expo } from "./pages/ExpoPage/Expo";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/choice",
      element: <RegisterPage />,
      id: 2,
    },
    {
      link: "/reg",
      element: <RegisterForm />,
      id: 3,
    },
    {
      link: "/program",
      element: <Program />,
      id: 4,
    },
    {
      link: "/expo",
      element: <Expo />,
      id: 5,
    },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
