import { lazy, Suspense, useState } from "react";
import sprite from "../img/icon/icon-sprite.svg";

import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header/Header.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const NewsPage = lazy(() => import("../pages/NewsPage/NewsPage.jsx"));
const NoticesPage = lazy(() => import("../pages/NoticesPage/NoticesPage.jsx"));
const OurFriendsPage = lazy(() =>
  import("../pages/OurFriendsPage/OurFriendsPage.jsx")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

const MainLayoutPage = lazy(() =>
  import("../pages/MainLayoutPage/MainLayoutPage.jsx")
);

const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage.jsx"));

const AddPetPage = lazy(() => import("../pages/AddPetPage/AddPetPage.jsx"));

function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation();

  // console.log(location.pathname !== "/");

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Suspense fallback={"Loader"}>
        <Routes>
          <Route path="/" element={<MainLayoutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
