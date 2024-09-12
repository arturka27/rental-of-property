import { Route, Routes } from "react-router-dom";
import HeaderPage from "../widgets/navbar/HeaderPage";
import FavoritePage from "../pages/favorute/FavoritePage";
import CategoriesPage from "../pages/categories/CategoriesPage";
import PropertyPage from "../pages/property/PropertyPage";
import AuthorizationPage from "../pages/auth/AuthorizationPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import LogoutPage from "../pages/auth/LogoutPage";
import { AppContext } from "./AppContext";
import { useEffect, useState } from "react";
import { axiosRequest, setAccessToken } from "../services/axiosinstance";
import FooterPage from "../widgets/footer/FooterPage";

function App() {
  const [user, setUser] = useState(undefined);
  const [properties, setProperties] = useState([])

  const getAllProperties = async () => {
    try {
      const response = await axiosRequest.get('/properties');
      if(response.status === 200) {
        setProperties(response.data.properties)
      }
    } catch ({response}) {
      console.log(response.data.message);
    }
  }

  const checkUser = async () => {
    try {
      const response = await axiosRequest.get('/tokens/refresh')
      if(response.status === 200){
        setAccessToken(response.data.accessToken);
        setUser(response.data.user)
      }
    } catch ({response}) {
      console.log(response.data.message);
    }
  }

  useEffect(() => {
    getAllProperties()
    checkUser()
  },[])

  return (
    <>
      <AppContext.Provider value={{ user, setUser }}>
        <HeaderPage />
        <Routes>
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/properties" element={<PropertyPage properties={properties} setProperties={setProperties}/>} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
        <FooterPage/>
      </AppContext.Provider>
    </>
  );
}

export default App;
