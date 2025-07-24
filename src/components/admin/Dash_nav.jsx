import React, { useState } from "react";
import "../../css/admin/Dash_nav.css";
import { Link } from "react-router-dom";

const Dash_nav = () => {



  return (
    <nav class="navbar">
      <Link to="/dashbord">
        <h1 class="home">Dashboard</h1>
      </Link>
 

      <div class="toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <div class="navbar-links">
        <Link to="/add_book">Add </Link>
        <Link to="/edite_book">Update </Link>
        <Link href="#">logout</Link>
        <Link href="#">name of admin</Link>
   
      </div>
    </nav>
  );
};

export default Dash_nav;