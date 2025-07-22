import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add_booke from "./Add_booke";
import Booke_liste from "./Booke_liste";
import NavBare from "./NavBare";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      {/* <NavBare /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Booke_liste />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="/add_booke" element={<Add_booke />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Footer /> */}
    </div>
  );
};

export default App;
