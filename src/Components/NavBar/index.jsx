import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Shopi</NavLink>
        </li>
      </ul>
      <ul></ul>
    </nav>
  );
};

export default NavBar;
