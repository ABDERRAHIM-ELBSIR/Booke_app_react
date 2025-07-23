import React from "react";
<<<<<<< HEAD
import "../../css/admin/Dash_nav.css"
import { Link } from "react-router-dom";
=======
import "../../css/admin/Dash_nav"
>>>>>>> c68eb35582c24e919d4993e2ab19a6491b89db57

const Dash_nav = () => {
return(
      <nav class="navbar">
<<<<<<< HEAD
    <Link to="/dashbord">
      <h1 class="home">Dashboard</h1>
    </Link>
=======
    <a href="#">
      <h1 class="home">Dashboard</h1>
    </a>
>>>>>>> c68eb35582c24e919d4993e2ab19a6491b89db57

    <div class="toggle">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <div class="navbar-links">
<<<<<<< HEAD
      <Link to="/add_book">Add </Link>
      <Link to="/edite_book">Update </Link>
      <Link href="#">logout</Link>
=======
      <a href="#">About</a>
      <a href="#">Skills</a>
      <a href="#">Contact</a>
>>>>>>> c68eb35582c24e919d4993e2ab19a6491b89db57
    </div>
  </nav>
)
};

export default Dash_nav;
