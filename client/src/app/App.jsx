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

function App() {
  const [user, setUser] = useState(undefined);
  const [properties, setProperties] = useState([])
  const [likedProperties, setLikedProperties] = useState([])

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
  console.log("user", user);
  

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
    getLikedProperties()
  },[])

  console.log(likedProperties, "likedProperties");
  
  return (
    <>
      <AppContext.Provider value={{ user, setUser, likedProperties, setLikedProperties}}>
        <HeaderPage />
        <Routes>
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/properties" element={<PropertyPage properties={properties} setProperties={setProperties}/>} />
          
          
          
          
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
