import React from "react";
import { NavLink } from "react-router-dom";
function CategoriesPage({ category }) {
  return (
    <li>
      <NavLink to={`/properties/?categoryId=${category.id}`}>{category.title}</NavLink>
    </li>
  );
}

export default CategoriesPage;
