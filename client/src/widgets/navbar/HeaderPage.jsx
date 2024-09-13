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
       <NavLink className="navlinkHome"to="/properties"><img className="logo" src="../../../public/image/logo.png" alt="logo" width={'100px'}/></NavLink>
      
      <button onClick={onHandleShow}>Категории</button>
      {showCategories && (
        <ul className="categories">
           {categories.map((category)=> ( <CategoriesPage key={category.id} category={category}/>))}
        </ul>
      )}
      <NavLink className="title" to={'/properties'}><h1 >Квартирный Базар</h1></NavLink>
      {user ? (
        <div className="log-logout">
          <h2 className="hello-text">Привет, {user.name}!</h2>
          {!user.isAdmin && (<NavLink className="navlink"to="/favorites">Избранное</NavLink>)}
          <NavLink className="navlink" to="/logout">Выход</NavLink>
        </div>
      ) : (
        <div className="log-logout">
          <NavLink className="navlink" to="/authorization">Вход</NavLink>
          <NavLink className="navlink" to="/registration">Регистрация</NavLink>
        </div>
      )}

    </div>
  );
}

export default HeaderPage;
