import React from "react";
import "../../css/admin/Dash_nav"

const Dash_nav = () => {
return(
      <nav class="navbar">
    <a href="#">
      <h1 class="home">Dashboard</h1>
    </a>

    <div class="toggle">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <div class="navbar-links">
      <a href="#">About</a>
      <a href="#">Skills</a>
      <a href="#">Contact</a>
    </div>
  </nav>
)
};

export default Dash_nav;
