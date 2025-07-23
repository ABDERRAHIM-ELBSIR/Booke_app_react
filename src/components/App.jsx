import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add_booke from "./admin/Add_booke";
import Booke_liste from "./Booke_liste";
import NavBare from "./NavBare";
import Footer from "./Footer";
import Dashboard from "./admin/Dashbord";
import Edite_book from "./admin/Edite_book";
import Dash_nav from "./admin/Dash_nav";



const App = () => {
  return (
    <div>
   
      <BrowserRouter>
        
      <NavBare/>
      {/* <Dash_nav/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Booke_liste />} />
          {/* <Route path="/add_booke" element={<Add_booke />} />

          <Route path="/add_book" element={<Add_booke/>} />
          <Route path="/dashbord" element={<Dashboard/>} />
          <Route path="/edite_book" element={<Edite_book/>} /> */}
        </Routes> 
        <Footer />
      </BrowserRouter>

    </div>
  );
};

export default App;
