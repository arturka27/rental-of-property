import { Route, Routes } from "react-router-dom";
import HeaderPage from "../widgets/navbar/HeaderPage";
import FavoritePage from "../pages/favorute/FavoritePage";
// import CategoriesPage from "../pages/categories/CategoriesPage";
import PropertyPage from "../pages/property/PropertyPage";
import AuthorizationPage from "../pages/auth/AuthorizationPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import LogoutPage from "../pages/auth/LogoutPage";
import { AppContext } from "./AppContext";
import { useEffect, useState } from "react";
import { axiosRequest, setAccessToken } from "../services/axiosinstance";
// import PropertyByCategoryPage from "../pages/property/PropertyByCategoryPage";
import FooterPage from "../widgets/footer/FooterPage";
import ErrorPage from "../pages/error/ErrorPage";
import PropertyCard from "../pages/property/PropertyCard";

function App() {
  const [user, setUser] = useState(undefined);

  const [likedProperties, setLikedProperties] = useState([])

  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axiosRequest.get("/categories");
      if (response.status === 200) {
        setCategories(response.data.categories);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };


  const getAllProperties = async () => {
    try {
      const response = await axiosRequest.get("/properties");
      if (response.status === 200) {
        setProperties(response.data.properties);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }

  }

  const getLikedProperties = async () => {
    try {
      const {data} = await axiosRequest.get('/favorites') 
      console.log(data.likes);
      
      if (data.message === "success") {
        const properties = data.likes[0].Properties
        setLikedProperties(properties)
      }
    } catch ({response}) {
      console.log(response.data.message);
    }
  }



  const checkUser = async () => {
    try {
      const response = await axiosRequest.get("/tokens/refresh");
      if (response.status === 200) {
        setAccessToken(response.data.accessToken);
        setUser(response.data.user);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {

    getAllCategories();
    getAllProperties();
    checkUser();
    getLikedProperties()
  }, []);

  
  return (
    <>

      <AppContext.Provider
        value={{
          user,
          setUser,
          properties,
          setProperties,
          categories,
          setCategories,likedProperties, setLikedProperties
        }}
      >
        <HeaderPage />
        <Routes>
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route index element={<PropertyPage />} />
          <Route path="/properties/:propertyId" element={<PropertyCard />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <FooterPage />
      </AppContext.Provider>
    </>
  );
}

export default App;
