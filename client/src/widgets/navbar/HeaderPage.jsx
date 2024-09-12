import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../app/AppContext";
import './HeaderPage.css'
import CategoriesPage from "../../pages/categories/CategoriesPage";
function HeaderPage() {
  const [showCategories, setShowCategories] = useState(false);
  const {user, categories} = useContext(AppContext)

  const onHandleShow = () => {
    setShowCategories((prev) => !prev);
  };
  return (
    <div className="header">
      <img src="../../../public/image/logo.png" alt="logo" width={'100px'}/>
      <button onClick={onHandleShow}>категории</button>
      {showCategories && (
        <ul className="categories">
          
          {categories.map((category)=> ( <CategoriesPage key={category.id} category={category}/>))}
          
        </ul>
      )}
      {user ? (
        <div className="log-logout">
          <h2 >Привет {user.name}!</h2>
          <NavLink className="navlink"to="/favorites">избранное</NavLink>
          <NavLink className="navlink" to="/logout">выход</NavLink>
        </div>
      ) : (
        <div className="log-logout">
          <NavLink className="navlink" to="/authorization">вход</NavLink>
          <NavLink className="navlink" to="/registration">регистрация</NavLink>
        </div>
      )}
    </div>
  );
}

export default HeaderPage;
