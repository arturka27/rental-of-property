import { Route, Routes } from "react-router-dom";
import HeaderPage from "../widgets/navbar/HeaderPage";
import FavoritePage from "../pages/favorute/FavoritePage";
import CategoriesPage from "../pages/categories/CategoriesPage";
import PropertyPage from "../pages/property/PropertyPage";
import AuthorizationPage from "../pages/auth/AuthorizationPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import LogoutPage from "../pages/auth/LogoutPage";
import { AppContext } from "./AppContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(undefined);

  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <HeaderPage />
        <Routes>
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
